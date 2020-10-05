const dbUsers = require('../data/dbUsers');

const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

module.exports = {
  mostrar_Registro: function (req, res) {
    res.render('UserRegister', {
      title: 'Registro',
    });
  },
  ProcessRegister: function (req, res) {
    console.log(validationResult(req));
    let errors = validationResult(req);
    let lastID = 0;
    if (dbUsers.length > 0) {
      dbUsers.forEach((user) => {
        if (user.id > lastID) {
          lastID = user.id;
        }
      });
    }

    if (errors.isEmpty()) {
      let UserNuevo = {
        id: lastID + 1,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        avatar: req.files[0].filename,
        rol: 'user',
      };
      dbUsers.push(UserNuevo);

      fs.writeFileSync(
        path.join(__dirname, '..', 'data', 'users.json'),
        JSON.stringify(dbUsers),
        'utf-8'
      );
    } else {
      // if (!errors.isEmpty()) {
      // return res.render('UserRegister', {
      //   errors: errors.errors,
      //   title: 'Registro',
      // });
      res.render('UserRegister', {
        title: 'Registro',
        errors: errors.mapped(),
        old: req.body,
      });
    }

    res.render('UserLogin', {
      title: 'Ingresar',
    });
  },
  mostrar_Login: function (req, res) {
    res.render('UserLogin', {
      title: 'Ingresá a tu cuenta',
      usuario: req.session.usuario,
    });
  },

  processLogin: function (req, res) {
    let errors = validationResult(req);
    // console.log(validationResult(req));
    if (errors.isEmpty()) {
      dbUsers.forEach(function (usuario) {
        if (usuario.email == req.body.email) {
          req.session.usuario = {
            id: usuario.id,
            nick: usuario.first_name + ' ' + usuario.last_name,
            email: usuario.email,
            avatar: usuario.avatar,
          };
        }
      });
      if (req.body.Recordarme) {
        res.cookie('userDulceAzalea', req.session.usuario, {
          maxAge: 1000 * 60 * 2,
        });
      }
      res.redirect('/');
      // console.log(req.session.usuario);
    } else {
      res.render('UserLogin', {
        title: 'Ingresá a tu cuenta',
        errors: errors.mapped(),
        old: req.body,
        usuario: req.session.usuario,
      });
    }
  },
  profile: function (req, res) {
    console.log(req.session.usuario, 'test');
    res.render('UserPerfil', {
      title: 'Perfil',
      // dbProducts: dbProducts,
      usuario: req.session.usuario,
    });
  },
  logout: function (req, res) {
    req.session.destroy();
    if (req.cookies.userDulceAzalea) {
      res.cookie('userDulceAzalea', '', { maxAge: -1 });
    }
    return res.redirect('/');
  },
};
