# 🏠 Dolmen Piedra - Sistema Completo

Sistema completo de tienda online para muebles de piedra natural, compuesto por un frontend en React + TypeScript y un backend API REST en Node.js + Express.

## 📁 Estructura del Proyecto

```
MueblesWeb/
├── dolmenpiedra/          # Frontend (React + TypeScript + Vite)
└── backend/               # Backend (Node.js + Express + TypeScript)
```

## 🚀 Inicio Rápido

### 1. Backend (Puerto 3000)

```bash
# Navegar al directorio del backend
cd backend

# Instalar dependencias
npm install

# Configurar variables de entorno
# Copia .env.example a .env (ya está hecho)

# Iniciar en modo desarrollo
npm run dev
```

El backend estará disponible en: http://localhost:3000

### 2. Frontend (Puerto 5173)

```bash
# Navegar al directorio del frontend
cd dolmenpiedra

# Instalar dependencias (si aún no lo has hecho)
npm install

# Iniciar en modo desarrollo
npm run dev
```

El frontend estará disponible en: http://localhost:5173

## 📡 Endpoints de la API

### Productos (Mesas)
- `GET    /api/products` - Obtener todos los productos
- `GET    /api/products/:id` - Obtener producto por ID
- `POST   /api/products` - Crear nuevo producto
- `PUT    /api/products/:id` - Actualizar producto
- `DELETE /api/products/:id` - Eliminar producto

### Contacto
- `POST   /api/contact` - Enviar mensaje de contacto
- `GET    /api/contact` - Obtener todos los mensajes (admin)
- `GET    /api/contact/:id` - Obtener mensaje específico
- `PATCH  /api/contact/:id/read` - Marcar como leído
- `DELETE /api/contact/:id` - Eliminar mensaje

### Salud
- `GET    /api/health` - Estado del servidor

## 🔧 Tecnologías Utilizadas

### Frontend
- **React 19** - Framework de UI
- **TypeScript** - Lenguaje tipado
- **Vite** - Build tool y dev server
- **React Router DOM** - Enrutamiento
- **CSS personalizado** - Estilos

### Backend
- **Node.js** - Entorno de ejecución
- **Express** - Framework web
- **TypeScript** - Lenguaje tipado
- **CORS** - Manejo de peticiones cross-origin
- **uuid** - Generación de IDs únicos
- **tsx** - Ejecución de TypeScript en desarrollo

## 💾 Base de Datos

Actualmente el backend usa una **base de datos en memoria**. Los datos se pierden al reiniciar el servidor.

### Productos Iniciales:
- Mesa de Centro Damero (1768€)
- Mesa Salón Travertino (6746€)
- Mesa Velador (2019€)
- Tapas Mesas Travertino (580€/ud)

## 🔐 Variables de Entorno

### Backend (.env)
```env
PORT=3000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:3000/api
```

## 📝 Ejemplos de Uso de la API

### Crear un Producto
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Mesa Nueva",
    "descripcion": "Descripción de la mesa",
    "precio": "1500€",
    "imagen": "/images/mesa.jpg",
    "stock": 10,
    "categoria": "Mesa de Centro"
  }'
```

### Enviar Mensaje de Contacto
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Juan Pérez",
    "email": "juan@example.com",
    "phone": "+34 123456789",
    "subject": "Consulta",
    "message": "Me interesa la Mesa Velador"
  }'
```

## 🛠️ Scripts Disponibles

### Backend
- `npm run dev` - Modo desarrollo con hot reload
- `npm run build` - Compilar TypeScript
- `npm start` - Ejecutar en producción
- `npm run lint` - Linter de código

### Frontend
- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build para producción
- `npm run preview` - Preview del build
- `npm run lint` - Linter de código

## 🔄 Flujo de Trabajo

1. **Desarrollo Frontend**: Los cambios en el frontend se reflejan automáticamente
2. **Desarrollo Backend**: Los cambios en el backend reinician automáticamente el servidor
3. **CORS**: Ya está configurado para permitir peticiones desde el frontend
4. **API Client**: El frontend usa `src/services/api.ts` para todas las peticiones

## 📦 Estructura de Respuesta de la API

Todas las respuestas siguen este formato:

```typescript
{
  success: boolean;
  data?: any;        // Presente en respuestas exitosas
  message?: string;  // Mensaje descriptivo
  error?: string;    // Presente en caso de error
}
```

## 🚧 Próximas Mejoras Sugeridas

### Backend
- [ ] Integrar base de datos real (MongoDB/PostgreSQL)
- [ ] Sistema de autenticación JWT
- [ ] Upload de imágenes a servidor/cloud
- [ ] Paginación y filtros en listados
- [ ] Envío de emails para notificaciones
- [ ] Tests unitarios y de integración
- [ ] Rate limiting
- [ ] Logging avanzado

### Frontend
- [ ] Panel de administración
- [ ] Carrito de compras
- [ ] Sistema de pago
- [ ] Búsqueda y filtros avanzados
- [ ] Galería de imágenes para productos
- [ ] Optimización de imágenes
- [ ] PWA (Progressive Web App)
- [ ] SEO mejorado

## 🐛 Troubleshooting

### El backend no inicia
- Verifica que el puerto 3000 esté disponible
- Asegúrate de que las dependencias estén instaladas
- Revisa el archivo `.env`

### El frontend no conecta con el backend
- Verifica que el backend esté ejecutándose en el puerto 3000
- Revisa el archivo `.env` del frontend
- Comprueba que CORS esté habilitado correctamente

### Errores de CORS
- Asegúrate de que `CORS_ORIGIN` en el backend coincida con la URL del frontend
- Verifica que ambos servidores estén ejecutándose

## 📖 Documentación Adicional

- [README del Backend](./backend/README.md) - Documentación específica del backend
- [README del Frontend](./dolmenpiedra/README.md) - Documentación específica del frontend

## 👥 Contribuir

Para contribuir al proyecto:
1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código privado. Todos los derechos reservados.

---

**Desarrollado con ❤️ para Dolmen Piedra**
