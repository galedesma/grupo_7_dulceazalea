const dbUsers = require('../data/dbUsers');

const db = require('../database/models');

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
    // console.log(validationResult(req));
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.Users.create({
        first_name: req.body.first_name.trim(),
        last_name: req.body.last_name.trim(),
        user_mail: req.body.email.trim(),
        password: bcrypt.hashSync(req.body.password, 10),
        avatar: req.file[0] ? req.file[0].filename : null,
        rol: 0,
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
