import express from 'express';
import { sendMessage, getMessages } from '../controllers/message.controllers.js';
const router = express.Router();
import protectRoute from '../middleware/protectRoute.js';

router.get("/:id", protectRoute, getMessages);
router.post('/send/:id', protectRoute, sendMessage);

export default router;
