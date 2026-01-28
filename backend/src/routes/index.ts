import { Router } from 'express';
import productsRoutes from './productsRoutes.js';
import contactRoutes from './contactRoutes.js';

const router = Router();

// Montar las rutas
router.use('/products', productsRoutes);
router.use('/contact', contactRoutes);

// Ruta de salud del API
router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API funcionando correctamente',
    timestamp: new Date().toISOString()
  });
});

export default router;
