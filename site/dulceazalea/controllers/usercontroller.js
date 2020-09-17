const dbUsers = require('../data/dbUsers');

const {validationResult} = require('express-validator')
const fs = require('fs');
const path = require('path');

module.exports = {
  mostrar_Registro: function (req, res) {
    res.render('UserRegister', {
      title: 'Registro',
    });
  },
  processRegister: function (req, res) {},
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  mostrar_Login: function (req, res) {
    res.render('UserLogin', {
      title: 'Login',
      usuario:req.session.usuario
    });
  },
  processLogin:function(req,res){
    let errors = validationResult(req);
    if(errors.isEmpty()){
      dbUsers.forEach(function(usuario){
        if(usuario.email == req.body.email){
          req.session.usuario = {
            id: usuario.id,
            nick: usuario.nombre + " " + usuario.apellido,
            email: usuario.email
          }
        }
      });
      res.redirect('/')
    }else{
        res.render('UserLogin',{
            title:"Ingresá a tu cuenta",
            errors:errors.mapped(),
            old:req.body,
            usuario:req.session.usuario
           })
    }
},
  profile: function (req, res) {
    res.render('UserPerfil', {
      title: 'Perfil',
    });
  },
};
