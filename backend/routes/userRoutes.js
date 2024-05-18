import express from "express";
import { getOtherUsers, login, logout, register } from "../controllers/userController.js";
import {isAunthenticated} from '../middleware/isAuthenticated.js'

const route = express.Router();

route.post("/register", register);
route.post('/login', login)
route.get('/logout', logout)
route.get('/', isAunthenticated, getOtherUsers)

export default route;
