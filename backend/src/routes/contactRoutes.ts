import { Router } from 'express';
import {
  createContactMessage,
  getAllContactMessages,
  getContactMessageById,
  markMessageAsRead,
  deleteContactMessage
} from '../controllers/contactController.js';

const router = Router();

// Rutas de contacto
router.post('/', createContactMessage);              // POST /api/contact
router.get('/', getAllContactMessages);              // GET /api/contact (admin)
router.get('/:id', getContactMessageById);           // GET /api/contact/:id
router.patch('/:id/read', markMessageAsRead);        // PATCH /api/contact/:id/read
router.delete('/:id', deleteContactMessage);         // DELETE /api/contact/:id

export default router;
