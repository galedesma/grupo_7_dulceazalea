module.exports = function (req, res, next) {
  if (req.cookies.userDulceAzalea) {
    req.session.usuario = req.cookies.userDulceAzalea;
    next();
  } else {
    next();
  }
};
