import express from "express";
import passport from "passport";
import { isAuth } from './middlewares/Middlewares.js';
import {
  redirectLoginController,
  goIndexController,
  goLoginController,
  goLogoutController,
  goUnauthorizedController,
  goLoginErrorController,
  goVisitasController,
  goExitController,
  goForkController
} from '../controllers/FrontControllers.js'

const router = express.Router();
router.use(passport.initialize());
router.use(passport.session());

router.get('/auth/facebook', passport.authenticate('facebook'));
router.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/index', failureRedirect: '/login' }));

router.get('/', redirectLoginController);
router.get("/index", isAuth, goIndexController);
router.get("/login", goLoginController);
router.get('/logout', goLogoutController);
router.get("/unauthorized", goUnauthorizedController);
router.get("/login-error", goLoginErrorController);
router.get('/visitas', goVisitasController);
router.get("/exit", goExitController);
router.get('/fork', goForkController);

export default router;