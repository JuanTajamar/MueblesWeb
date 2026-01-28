# 🧪 Guía de Pruebas de la API

Este documento contiene ejemplos prácticos para probar todas las funcionalidades de la API.

## 🔗 URL Base
```
http://localhost:3000/api
```

## 1️⃣ Salud del Servidor

### Verificar que el servidor está funcionando
```bash
curl http://localhost:3000/api/health
```

**Respuesta esperada:**
```json
{
  "success": true,
  "message": "API funcionando correctamente",
  "timestamp": "2026-01-28T..."
}
```

---

## 2️⃣ Productos (Mesas)

### GET - Obtener todos los productos
```bash
curl http://localhost:3000/api/products
```

### GET - Obtener producto por ID
```bash
# Primero obtén un ID de la lista de productos, luego:
curl http://localhost:3000/api/products/[ID_DEL_PRODUCTO]
```

### POST - Crear nuevo producto
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Mesa Contemporánea",
    "descripcion": "Mesa moderna de mármol con diseño minimalista",
    "precio": "3200€",
    "imagen": "/images/mesa_contemporanea.jpg",
    "stock": 7,
    "categoria": "Mesa de Comedor"
  }'
```

### PUT - Actualizar producto
```bash
curl -X PUT http://localhost:3000/api/products/[ID_DEL_PRODUCTO] \
  -H "Content-Type: application/json" \
  -d '{
    "precio": "2900€",
    "stock": 5
  }'
```

### DELETE - Eliminar producto
```bash
curl -X DELETE http://localhost:3000/api/products/[ID_DEL_PRODUCTO]
```

---

## 3️⃣ Contacto

### POST - Enviar mensaje de contacto
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "María García",
    "email": "maria@example.com",
    "phone": "+34 600123456",
    "subject": "Consulta sobre Mesa Velador",
    "message": "Buenos días, me gustaría obtener más información sobre la Mesa Velador en travertino. ¿Tienen disponibilidad inmediata?"
  }'
```

### GET - Obtener todos los mensajes (admin)
```bash
curl http://localhost:3000/api/contact
```

### GET - Obtener mensaje por ID
```bash
curl http://localhost:3000/api/contact/[ID_DEL_MENSAJE]
```

### PATCH - Marcar mensaje como leído
```bash
curl -X PATCH http://localhost:3000/api/contact/[ID_DEL_MENSAJE]/read
```

### DELETE - Eliminar mensaje
```bash
curl -X DELETE http://localhost:3000/api/contact/[ID_DEL_MENSAJE]
```

---

## 🖥️ Usar desde PowerShell

Si estás en Windows PowerShell, usa este formato:

### Ejemplo GET:
```powershell
Invoke-RestMethod -Uri "http://localhost:3000/api/products" -Method Get
```

### Ejemplo POST:
```powershell
$body = @{
    nombre = "Mesa Test"
    descripcion = "Descripción de prueba"
    precio = "1000€"
    imagen = "/images/test.jpg"
    stock = 5
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3000/api/products" -Method Post -Body $body -ContentType "application/json"
```

---

## 🌐 Probar desde el Navegador

### Método 1: Consola del Navegador (F12)

Abre la consola de Chrome/Firefox y ejecuta:

```javascript
// GET - Obtener productos
fetch('http://localhost:3000/api/products')
  .then(res => res.json())
  .then(data => console.log(data));

// POST - Crear producto
fetch('http://localhost:3000/api/products', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    nombre: "Mesa desde navegador",
    descripcion: "Creada desde la consola",
    precio: "1500€",
    imagen: "/images/test.jpg",
    stock: 10
  })
})
  .then(res => res.json())
  .then(data => console.log(data));

// POST - Enviar mensaje de contacto
fetch('http://localhost:3000/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: "Test User",
    email: "test@example.com",
    phone: "+34 123456789",
    subject: "Prueba desde navegador",
    message: "Este es un mensaje de prueba"
  })
})
  .then(res => res.json())
  .then(data => console.log(data));
```

### Método 2: Acceso Directo GET

Simplemente abre estas URLs en tu navegador:
- http://localhost:3000/api/health
- http://localhost:3000/api/products
- http://localhost:3000/api/contact

---

## 🔍 Usando Postman o Thunder Client

### Configuración de Colección

1. **Base URL**: `http://localhost:3000/api`
2. **Headers comunes**:
   - `Content-Type: application/json`

### Colección de Requests:

#### 1. Health Check
- **Método**: GET
- **URL**: `{{base_url}}/health`

#### 2. Get All Products
- **Método**: GET
- **URL**: `{{base_url}}/products`

#### 3. Create Product
- **Método**: POST
- **URL**: `{{base_url}}/products`
- **Body (JSON)**:
```json
{
  "nombre": "Mesa Nueva",
  "descripcion": "Descripción",
  "precio": "2000€",
  "imagen": "/images/mesa.jpg",
  "stock": 10,
  "categoria": "Mesa de Centro"
}
```

#### 4. Send Contact Message
- **Método**: POST
- **URL**: `{{base_url}}/contact`
- **Body (JSON)**:
```json
{
  "name": "Test User",
  "email": "test@example.com",
  "phone": "+34 123456789",
  "subject": "Test Subject",
  "message": "Test message content"
}
```

---

## ✅ Validaciones Implementadas

### Productos (POST/PUT):
- ✅ `nombre` es obligatorio
- ✅ `descripcion` es obligatorio
- ✅ `precio` es obligatorio
- ⚠️ `imagen`, `stock`, `categoria` son opcionales

### Contacto (POST):
- ✅ `name` es obligatorio
- ✅ `email` es obligatorio y debe ser válido
- ✅ `message` es obligatorio
- ⚠️ `phone` y `subject` son opcionales

---

## 📊 Códigos de Estado HTTP

- `200 OK` - Petición exitosa (GET, PUT, PATCH)
- `201 Created` - Recurso creado exitosamente (POST)
- `400 Bad Request` - Datos inválidos
- `404 Not Found` - Recurso no encontrado
- `500 Internal Server Error` - Error del servidor

---

## 🎯 Flujo de Prueba Completo

```bash
# 1. Verificar salud
curl http://localhost:3000/api/health

# 2. Ver productos iniciales
curl http://localhost:3000/api/products

# 3. Crear un nuevo producto
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Test","descripcion":"Test desc","precio":"100€","imagen":"/test.jpg"}'

# 4. Actualizar el producto (usar el ID de la respuesta anterior)
curl -X PUT http://localhost:3000/api/products/[ID] \
  -H "Content-Type: application/json" \
  -d '{"precio":"150€"}'

# 5. Enviar mensaje de contacto
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","phone":"123","subject":"Test","message":"Hola"}'

# 6. Ver todos los mensajes
curl http://localhost:3000/api/contact

# 7. Eliminar el producto de prueba
curl -X DELETE http://localhost:3000/api/products/[ID]
```

---

## 💡 Consejos

1. **Guarda los IDs**: Cuando crees productos o mensajes, guarda el ID de la respuesta para poder hacer operaciones UPDATE/DELETE

2. **Usa variables**: En Postman/Thunder Client, crea variables de entorno para los IDs

3. **Logs del servidor**: Observa la consola del backend para ver las peticiones en tiempo real

4. **Formato JSON**: Asegúrate de que el JSON esté bien formateado, usa un validador si es necesario

5. **CORS**: Si pruebas desde otra aplicación web, asegúrate de que el servidor backend esté configurado para aceptar peticiones desde ese origen

---

**¡Listo para probar! 🚀**
