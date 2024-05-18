import express from 'express'
import { getMessage, sendMessage } from '../controllers/MessageController.js';
import {isAunthenticated} from '../middleware/isAuthenticated.js'

const route = express.Router();

route.post('/send/:id', isAunthenticated, sendMessage)
route.post('/receive/:id', isAunthenticated, getMessage)

export default route;