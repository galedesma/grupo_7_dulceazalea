module.exports = function (req, res, next) {
  if(req.session.user == undefined){
    res.redirect('/users/login')
  } else if (req.session.user.rol == '1') {
    next();
  } else {
    res.redirect('/');
  }

};
