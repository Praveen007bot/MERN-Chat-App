import express from 'express'
import { sendMessage } from '../controllers/MessageController.js';
import {isAunthenticated} from '../middleware/isAuthenticated.js'

const route = express.Router();

route.post('/send/:id', isAunthenticated, sendMessage)

export default route;