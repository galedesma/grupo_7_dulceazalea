module.exports = function (req, res, next) {
  if (req.session.user.rol == '1') {
    next();
  } else {
    //No redirige si no hay sesión iniciada
    res.redirect('/');
  }
};
