import {PORT} from '../utils/config.js';

function redirectLoginController(req, res) {
  res.redirect('/login');
};

function goIndexController(req, res) {
  res.render("index", { user: req.session.passport.user });
};

function goLoginController(req, res) {
  if (req.isAuthenticated()) {
    res.redirect("index");
  } else {
    res.render("login");
  }
};

function goLogoutController(req, res) {
  res.render("logout", { user: req.session.passport.user });
  req.logout();
};

function goUnauthorizedController(req, res) {
  res.render("unauthorized");
};

function goLoginErrorController(req, res) {
  res.render("login-error");
};

let visitas = 0;
function goVisitasController(req, res) {
  res.end(`Visitas: ${++visitas}`);
};

function goExitController(req, res) {
  res.end("Salida del proceso de node.js");
  process.exit();
};

function goForkController(req, res) {
  res.send(`Servidor express en ${PORT} - <b>PID ${process.pid}</b> - ${new Date().toLocaleString()}`)
};

export {
  redirectLoginController,
  goIndexController,
  goLoginController,
  goLogoutController,
  goUnauthorizedController,
  goLoginErrorController,
  goVisitasController,
  goExitController,
  goForkController
}