const dbUsers = require('../data/dbUsers');
const fs = require('fs');
const path = require('path');

module.exports = {
  mostrar_Registro: function (req, res) {
    res.render('UserRegister', {
      title: 'Registro',
    });
  },
  ProcessRegister: function (req, res) {},
  mostrar_Login: function (req, res) {
    res.render('UserLogin', {
      title: 'Login',
    });
  },
  ProcessLogin: function (req, res) {},
  profile: function (req, res) {
    res.render('UserPerfil', {
      title: 'Perfil',
    });
  },
};
