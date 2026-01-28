import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/index.js';
import { errorHandler, notFoundHandler, requestLogger } from './middlewares/errorHandler.js';

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:5173';

// Middlewares globales
app.use(cors({
  origin: CORS_ORIGIN,
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

// Ruta raíz
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Bienvenido a la API de Dolmen Piedra',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      products: '/api/products',
      contact: '/api/contact'
    }
  });
});

// Montar rutas de la API
app.use('/api', routes);

// Manejadores de errores (deben ir al final)
app.use(notFoundHandler);
app.use(errorHandler);

// Iniciar servidor
app.listen(PORT, () => {
  console.log('================================================');
  console.log(`🚀 Servidor ejecutándose en puerto ${PORT}`);
  console.log(`📡 API disponible en: http://localhost:${PORT}`);
  console.log(`🌐 CORS habilitado para: ${CORS_ORIGIN}`);
  console.log('================================================');
  console.log('Endpoints disponibles:');
  console.log(`  GET    http://localhost:${PORT}/api/health`);
  console.log(`  GET    http://localhost:${PORT}/api/products`);
  console.log(`  GET    http://localhost:${PORT}/api/products/:id`);
  console.log(`  POST   http://localhost:${PORT}/api/products`);
  console.log(`  PUT    http://localhost:${PORT}/api/products/:id`);
  console.log(`  DELETE http://localhost:${PORT}/api/products/:id`);
  console.log(`  POST   http://localhost:${PORT}/api/contact`);
  console.log(`  GET    http://localhost:${PORT}/api/contact`);
  console.log('================================================');
});

export default app;
