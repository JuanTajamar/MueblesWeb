# Backend API - Dolmen Piedra

Backend API REST para la tienda de muebles de piedra natural Dolmen Piedra.

## 🚀 Tecnologías

- **Node.js** - Entorno de ejecución
- **Express** - Framework web
- **TypeScript** - Lenguaje tipado
- **CORS** - Manejo de peticiones cross-origin

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Copiar archivo de variables de entorno
cp .env.example .env
```

## ⚙️ Configuración

Edita el archivo `.env` con tus configuraciones:

```env
PORT=3000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

## 🏃‍♂️ Ejecución

```bash
# Modo desarrollo (con hot reload)
npm run dev

# Compilar TypeScript
npm run build

# Ejecutar en producción
npm start
```

## 📡 Endpoints Disponibles

### Productos (Mesas)

- `GET /api/products` - Obtener todos los productos
- `GET /api/products/:id` - Obtener un producto específico
- `POST /api/products` - Crear un nuevo producto
- `PUT /api/products/:id` - Actualizar un producto
- `DELETE /api/products/:id` - Eliminar un producto

#### Ejemplo de creación de producto:
```json
POST /api/products
{
  "nombre": "Mesa Moderna",
  "descripcion": "Mesa de diseño contemporáneo",
  "precio": "2500€",
  "imagen": "/images/mesa.jpg",
  "stock": 10,
  "categoria": "Mesa de Centro"
}
```

### Contacto

- `POST /api/contact` - Enviar mensaje de contacto
- `GET /api/contact` - Obtener todos los mensajes (admin)
- `GET /api/contact/:id` - Obtener un mensaje específico
- `PATCH /api/contact/:id/read` - Marcar mensaje como leído
- `DELETE /api/contact/:id` - Eliminar un mensaje

#### Ejemplo de mensaje de contacto:
```json
POST /api/contact
{
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "phone": "+34 123456789",
  "subject": "Consulta sobre productos",
  "message": "Me gustaría más información sobre la Mesa Velador"
}
```

### Salud del API

- `GET /api/health` - Verificar estado del servidor

## 📁 Estructura del Proyecto

```
backend/
├── src/
│   ├── controllers/       # Controladores de rutas
│   ├── models/           # Tipos e interfaces TypeScript
│   ├── routes/           # Definición de rutas
│   ├── database/         # Base de datos en memoria
│   ├── middlewares/      # Middlewares personalizados
│   └── server.ts         # Archivo principal del servidor
├── dist/                 # Código compilado (generado)
├── .env                  # Variables de entorno (no incluir en git)
├── .env.example          # Ejemplo de variables de entorno
├── package.json          # Dependencias y scripts
└── tsconfig.json         # Configuración de TypeScript
```

## 🔒 Notas de Seguridad

- La base de datos actual es en memoria (los datos se pierden al reiniciar)
- Para producción, considera implementar:
  - Base de datos persistente (MongoDB, PostgreSQL)
  - Autenticación JWT para rutas admin
  - Rate limiting
  - Validación de datos más robusta
  - HTTPS

## 🛠️ Próximas Mejoras

- [ ] Integrar base de datos real (MongoDB/PostgreSQL)
- [ ] Sistema de autenticación
- [ ] Upload de imágenes
- [ ] Paginación en listados
- [ ] Filtros y búsqueda
- [ ] Envío de emails para notificaciones de contacto
- [ ] Tests unitarios y de integración

## 📝 Respuestas de la API

Todas las respuestas siguen el formato:

```typescript
{
  success: boolean;
  data?: any;        // Presente en respuestas exitosas
  message?: string;  // Mensaje descriptivo
  error?: string;    // Presente en caso de error
}
```

## 👥 Contacto

Para consultas sobre la API, contacta al equipo de desarrollo.
