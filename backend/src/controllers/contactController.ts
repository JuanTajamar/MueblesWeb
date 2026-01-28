import { Request, Response } from 'express';
import { contactMessagesDB } from '../database/database.js';
import type { CreateContactMessageDto } from '../models/ContactMessage.js';
import type { ApiResponse } from '../models/ApiResponse.js';

// POST /api/contact - Crear un nuevo mensaje de contacto
export const createContactMessage = (req: Request, res: Response) => {
  try {
    const messageData: CreateContactMessageDto = req.body;

    // Validación básica
    if (!messageData.name || !messageData.email || !messageData.message) {
      const response: ApiResponse<null> = {
        success: false,
        error: 'Faltan campos obligatorios: name, email, message'
      };
      return res.status(400).json(response);
    }

    // Validación de email básica
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(messageData.email)) {
      const response: ApiResponse<null> = {
        success: false,
        error: 'Email inválido'
      };
      return res.status(400).json(response);
    }

    const newMessage = contactMessagesDB.createMessage(messageData);
    const response: ApiResponse<typeof newMessage> = {
      success: true,
      data: newMessage,
      message: 'Mensaje enviado correctamente. Nos pondremos en contacto pronto.'
    };
    res.status(201).json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: error instanceof Error ? error.message : 'Error desconocido'
    };
    res.status(500).json(response);
  }
};

// GET /api/contact - Obtener todos los mensajes (admin)
export const getAllContactMessages = (req: Request, res: Response) => {
  try {
    const messages = contactMessagesDB.getAllMessages();
    const response: ApiResponse<typeof messages> = {
      success: true,
      data: messages,
      message: 'Mensajes obtenidos correctamente'
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: error instanceof Error ? error.message : 'Error desconocido'
    };
    res.status(500).json(response);
  }
};

// GET /api/contact/:id - Obtener un mensaje específico
export const getContactMessageById = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const message = contactMessagesDB.getMessageById(id);

    if (!message) {
      const response: ApiResponse<null> = {
        success: false,
        error: 'Mensaje no encontrado'
      };
      return res.status(404).json(response);
    }

    const response: ApiResponse<typeof message> = {
      success: true,
      data: message
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: error instanceof Error ? error.message : 'Error desconocido'
    };
    res.status(500).json(response);
  }
};

// PATCH /api/contact/:id/read - Marcar mensaje como leído
export const markMessageAsRead = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const message = contactMessagesDB.markAsRead(id);

    if (!message) {
      const response: ApiResponse<null> = {
        success: false,
        error: 'Mensaje no encontrado'
      };
      return res.status(404).json(response);
    }

    const response: ApiResponse<typeof message> = {
      success: true,
      data: message,
      message: 'Mensaje marcado como leído'
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: error instanceof Error ? error.message : 'Error desconocido'
    };
    res.status(500).json(response);
  }
};

// DELETE /api/contact/:id - Eliminar un mensaje
export const deleteContactMessage = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = contactMessagesDB.deleteMessage(id);

    if (!deleted) {
      const response: ApiResponse<null> = {
        success: false,
        error: 'Mensaje no encontrado'
      };
      return res.status(404).json(response);
    }

    const response: ApiResponse<null> = {
      success: true,
      message: 'Mensaje eliminado correctamente'
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: error instanceof Error ? error.message : 'Error desconocido'
    };
    res.status(500).json(response);
  }
};
