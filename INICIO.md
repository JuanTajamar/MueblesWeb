# Instrucciones de Inicio - Dolmen Piedra

## 🚀 Inicio Rápido (Windows)

### Opción 1: Iniciar ambos servidores manualmente

#### Terminal 1 - Backend:
```powershell
cd backend
npm run dev
```

#### Terminal 2 - Frontend:
```powershell
cd dolmenpiedra
npm run dev
```

### Opción 2: Script de inicio automático (crear este archivo)

Crea un archivo `start.ps1` en la raíz del proyecto:

```powershell
# Iniciar Backend
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd backend; npm run dev"

# Esperar 5 segundos
Start-Sleep -Seconds 5

# Iniciar Frontend
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd dolmenpiedra; npm run dev"

Write-Host "✅ Backend iniciado en http://localhost:3000"
Write-Host "✅ Frontend iniciado en http://localhost:5173"
```

Luego ejecuta:
```powershell
.\start.ps1
```

## 🔍 Verificar que todo funciona

### 1. Backend
- Abre: http://localhost:3000
- Deberías ver el mensaje de bienvenida de la API

### 2. Frontend
- Abre: http://localhost:5173
- Navega a la página de productos
- Navega a la página de contacto y envía un mensaje de prueba

### 3. Conexión Backend-Frontend
- En la página de productos, deberías ver los 4 productos iniciales
- Si envías un mensaje en la página de contacto, deberías ver un mensaje de éxito

## ⚠️ Solución de Problemas

### El backend no inicia
1. Asegúrate de estar en la carpeta `backend`
2. Verifica que instalaste las dependencias: `npm install`
3. Verifica que el puerto 3000 no esté ocupado

### El frontend no conecta al backend
1. Verifica que el backend esté corriendo en http://localhost:3000
2. Comprueba el archivo `.env` en la carpeta `dolmenpiedra`:
   ```
   VITE_API_URL=http://localhost:3000/api
   ```
3. Reinicia el frontend después de modificar `.env`

### Error de CORS
- Verifica que en `backend/.env` tengas:
  ```
  CORS_ORIGIN=http://localhost:5173
  ```

### Error de ejecución de scripts en PowerShell
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
```

## 📦 Primera vez (Instalación completa)

Si es la primera vez que ejecutas el proyecto:

```powershell
# 1. Backend
cd backend
npm install
Copy-Item .env.example .env
cd ..

# 2. Frontend
cd dolmenpiedra
npm install
Copy-Item .env.example .env
cd ..

# 3. Ahora ya puedes iniciar ambos servidores
```

## 🌐 URLs Importantes

| Servicio | URL | Descripción |
|----------|-----|-------------|
| Frontend | http://localhost:5173 | Aplicación web |
| Backend API | http://localhost:3000 | API REST |
| API Health | http://localhost:3000/api/health | Estado del servidor |
| API Products | http://localhost:3000/api/products | Listado de productos |
| API Contact | http://localhost:3000/api/contact | Endpoint de contacto |

## 🎯 ¿Qué hacer después de iniciar?

1. **Explora el frontend**: http://localhost:5173
2. **Prueba el formulario de contacto**: Envía un mensaje
3. **Consulta los logs del backend**: Verás las peticiones en la terminal
4. **Prueba la API**: Usa el archivo `TESTING.md` para ejemplos

¡Listo! 🎉
