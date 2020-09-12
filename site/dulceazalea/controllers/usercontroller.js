const dbUsers = require('../data/dbUsers');
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
    });
  },
  processLogin:function(req,res){
    let errors = validationResult(req);
    if(errors.isEmpty()){

    }else{
        res.render('userLogin',{
            title:"Ingresá a tu cuenta",
            errors:errors.mapped(),
            old:req.body
           })
    }
},
  profile: function (req, res) {
    res.render('UserPerfil', {
      title: 'Perfil',
    });
  },
};
