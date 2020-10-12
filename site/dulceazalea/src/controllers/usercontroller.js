const dbUsers = require('../data/dbUsers');

const db = require('../database/models');

const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const { where } = require('sequelize');

module.exports = {
  mostrar_Registro: function (req, res) {
    res.render('UserRegister', {
      title: 'Registro',
    });
  },
  ProcessRegister: function (req, res) {
    // console.log(validationResult(req));
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.Users.create({
        first_name: req.body.first_name.trim(),
        last_name: req.body.last_name.trim(),
        user_mail: req.body.email.trim(),
        password: bcrypt.hashSync(req.body.password, 10),
        avatar: req.files[0] ? req.files[0].filename : 'user-profile.jpg',
        rol: '0',
        //null
      })
        .then((result) => {
          console.log(result);
          return res.redirect('/users/login');
        })
        .catch((errores) => {
          console.log(errores);
          return res.redirect('/users/register');
        });
    } else {
      res.render('UserRegister', {
        title: 'Registro',
        errors: errors.mapped(),
        old: req.body,
      });
    }
  },
  mostrar_Login: function (req, res) {
    res.render('UserLogin', {
      title: 'Ingresá a tu cuenta',
      usuario: req.session.usuario,
    });
  },

  processLogin: function (req, res) {
    let errors = validationResult(req);
    console.log(validationResult(req));
    console.log(req.body.email + 'email');
    // console.log(errors + ' errors');
    if (errors.isEmpty()) {
      db.Users.findOne({
        where: {
          user_mail: req.body.email,
        },
      }).then((user) => {
        req.session.user = {
          id: user.id_user,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.user_mail,
          avatar: user.avatar,
          rol: user.rol,
        };
        console.log(req.session.user + 'usuarop');
        if (req.body.Recordarme) {
          res.cookie('userDulceAzalea', req.session.user, {
            maxAge: 1000 * 60 * 5,
          });
        }
        res.locals.user = req.session.user;

        return res.redirect('/');
      });
    } else {
      res.render('UserLogin', {
        title: 'Ingresá a tu cuenta',
        errors: errors.mapped(),
        old: req.body,
        user: req.session.user,
      });
    }
  },
  profile: function (req, res) {
    console.log(req.session.user, 'test');
    res.render('UserPerfil', {
      title: 'Perfil',
      user: req.session.user,
    });
  },
  logout: function (req, res) {
    req.session.destroy();
    if (req.cookies.userDulceAzalea) {
      res.cookie('userDulceAzalea', '', { maxAge: -1 });
    }
    return res.redirect('/');
  },
  // editProfile: function (req, res) {
  //   db.Users.update(
  //     {
  //       first_name: req.body.first_name,
  //       last_name: req.body.last_name,
  //       avatar: req.files[0] ? req.files.filename : 'user-profile.jpg',
  //     },
  //     {
  //       where: {
  //         id: req.params.id,
  //       },
  //     }
  //   );
  // },
  // delete: function (req, res) {},
};
