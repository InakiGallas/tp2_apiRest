# 📦 tp2_apiRest

API REST básica hecha en Node.js + Express, con arquitectura en capas (modelo, servicio, controlador y rutas). Los datos de usuarios están almacenados en memoria (sin base de datos).

## 🚀 ¿Cómo usar este proyecto?

### 1. Clonar o copiar el proyecto  
http://github/asdfsdaf

### 2. Instalar dependencias  
Desde la terminal:

```bash
npm install
3. Iniciar el servidor

Para iniciar el servidor con reinicio automático al guardar:
npm run watch

También podés usar:
npm start

Servidor disponible en:
http://localhost:8080/users

📁 Estructura de carpetas
mi_api_node/
├── src/
│   ├── controllers/
│   │   └── user.controller.js
│   ├── models/
│   │   └── user.model.js
│   ├── routes/
│   │   └── user.route.js
│   └── services/
│       └── user.service.js
├── index.js
├── package.json
└── README.md
📌 Endpoints disponibles
Base: http://localhost:8080/users

🔹 GET /users
Obtiene todos los usuarios.

🔹 POST /users
Crea un nuevo usuario.
Body esperado:
{
  "id": 5,
  "nombre": "Nuevo Usuario",
  "email": "nuevo@correo.com",
  "nota": 9
}
🔹 PATCH /users/:id
Actualiza datos de un usuario por su ID.
Body esperado:

{
  "nombre": "Nombre Actualizado",
  "nota": 10
}
📝 Notas
No se usa base de datos: los usuarios están en un array en memoria (user.model.js).
