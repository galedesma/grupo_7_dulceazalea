const dbUsers = require('../data/dbUsers');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const { check, validationResult, body } = require('express-validator');

module.exports = {
  mostrar_Registro: function (req, res) {
    res.render('UserRegister', {
      title: 'Registro',
    });
  },
  ProcessRegister: function (req, res) {
    console.log(validationResult(req));
    let errors = validationResult(req);
    let LastID = dbUsers.length;

    if (errors.isEmpty()) {
      let UserNuevo = {
        id: LastID + 1,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
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
      return res.render('UserRegister', {
        errors: errors.errors,
        title: 'Registro',
      });
    }

    res.render('UserLogin', {
      title: 'Ingresar',
    });
  },
  mostrar_Login: function (req, res) {
    res.render('UserLogin', {
      title: 'UserPerfil',
    });
  },
  ProcessLogin: function (req, res) {},
  profile: function (req, res) {
    res.render('UserPerfil', {
      title: 'Perfil',
    });
  },
};