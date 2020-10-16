const dbUsers = require('../data/dbUsers');
const dbProduct = require('../data/database');

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
          id_user: user.id_user,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.user_mail,
          avatar: user.avatar,
          rol: user.rol,
          address: user.address,
          city: user.city,
          province: user.province,
          department: user.department,
        };
        let favorite_products = db.favorite_products
          .findOne({
            where: {
              users_id_user: req.session.user.id_user,
            },
          })
          .then((result) => {
            console.log(db.favorite_products + ' ---------------------------');
          });
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
    let principal = dbProduct.filter((producto) => {
      return producto.categoryHome == 'principal';
    });
    console.log(req.session.user, 'test');
    if (req.session.user) {
      db.Users.findByPk(req.session.user.id_user).then((user) => {
        console.log('profileuser' + user);
        res.render('UserPerfil', {
          title: 'Perfil',
          user: user,
          principal: principal,
        });
      });
    } else {
      res.redirect('/');
    }
  },

  editProfile: function (req, res) {
    // res.send(req.body);
    if (req.files[0]) {
      if (
        fs.existsSync(
          path.join(
            __dirname,
            '../../public/img/users/' + req.session.user.avatar
          )
        )
      ) {
        fs.unlinkSync(
          path.join(
            __dirname,
            '../../public/img/users/' + req.session.user.avatar
          )
        );
        res.locals.user.avatar = req.files[0].filename;
      }
    }
    db.Users.update(
      {
        avatar: req.files[0] ? req.files[0].filename : req.session.user.avatar,
        address: req.body.address,
        city: req.body.city,
        province: req.body.province,
        department: req.body.department,
      },
      {
        where: {
          id_user: req.params.id,
        },
      }
    )
      .then((result) => {
        console.log(req.session.user + ' dato de put');
        console.log(req.session.user.id + ' ud del usuario');

        return res.redirect('/');
      })
      .catch((err) => {
        console.log(err + ' error en el put de perfil');
      });
  },
  delete: function (req, res) {
    if (
      fs.existsSync(
        path.join(
          __dirname,
          '../../public/img/users/' + req.session.user.avatar
        )
      ) &&
      req.session.user.avatar != 'user-profile.jpg'
    ) {
      fs.unlinkSync(
        path.join(
          __dirname,
          '../../public/img/users/' + req.session.user.avatar
        )
      );
    }
    req.session.destroy();
    if (req.cookies.userDulceAzalea) {
      res.cookie('userDulceAzalea', '', { maxAge: -1 });
    } //se realiza un loguot
    // console.log(req);
    db.Users.destroy({
      where: { id_user: req.params.id },
    });
    return res.redirect('/');
  },
  logout: function (req, res) {
    req.session.destroy();
    if (req.cookies.userDulceAzalea) {
      res.cookie('userDulceAzalea', '', { maxAge: -1 });
    }
    return res.redirect('/');
  },
};
