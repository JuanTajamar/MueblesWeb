import { Request, Response, NextFunction } from 'express';
import type { ApiResponse } from '../models/ApiResponse.js';

// Middleware para manejar errores
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error('Error:', err);

  const response: ApiResponse<null> = {
    success: false,
    error: err.message || 'Error interno del servidor'
  };

  res.status(500).json(response);
};

// Middleware para rutas no encontradas
export const notFoundHandler = (
  req: Request,
  res: Response
) => {
  const response: ApiResponse<null> = {
    success: false,
    error: `Ruta no encontrada: ${req.method} ${req.url}`
  };
  res.status(404).json(response);
};

// Middleware para logging de peticiones
export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
};
