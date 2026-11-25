# FastShipAPI – API REST para la gestión de envíos

## 1. Descripción del proyecto

FastShipAPI es una API REST desarrollada con Node.js, Express.js y MongoDB, utilizando Mongoose como herramienta de modelado de datos.

El sistema permite registrar, consultar, actualizar y eliminar información de envíos, además de gestionar el estado de cada pedido.

## 2. Tecnologías utilizadas

- Node.js: entorno de ejecución de JavaScript.
- Express.js: framework para desarrollar las rutas y servicios REST.
- MongoDB: base de datos NoSQL.
- Mongoose: modelado de datos y validación de documentos.
- dotenv: administración de variables de entorno.
- cors: habilitación de solicitudes entre distintos orígenes.
- Nodemon: reinicio automático del servidor durante el desarrollo.
- Postman: herramienta para probar los endpoints.

## 3. Estructura del proyecto

```text
FastShipAPI/
├── config/
│   └── db.js
├── controllers/
│   └── envioController.js
├── models/
│   └── Envio.js
├── routes/
│   └── envios.js
├── .env
├── .gitignore
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

## 4. Instalación y configuración

### Requisitos previos

- Node.js y npm instalados.
- MongoDB instalado y ejecutándose localmente.
- Git instalado para publicar el proyecto en GitHub.

### Descargar el proyecto

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Ingresar a la carpeta:

```bash
cd FastShipAPI
```

Instalar las dependencias:

```bash
npm install
```

### Configurar las variables de entorno

Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/fastship
```

La variable `PORT` establece el puerto del servidor y `MONGO_URI` define la dirección de conexión a MongoDB.

## 5. Ejecución del servidor

Para iniciar el servidor en modo desarrollo:

```bash
npm run dev
```

Para iniciar el servidor normalmente:

```bash
npm start
```

Cuando la conexión sea correcta, se mostrarán mensajes indicando que el servidor está ejecutándose y que MongoDB se conectó exitosamente.

URL principal:

```text
http://localhost:3000
```

## 6. Modelo de datos: Envio

El modelo Envio utiliza Mongoose y contiene los siguientes campos:

| Campo | Tipo | Descripción |
|---|---|---|
| pedidoId | String | Código único del pedido |
| remitente | String | Nombre del remitente |
| destinatario | String | Nombre del destinatario |
| direccionEntrega | String | Dirección de entrega |
| estado | String | Estado actual del envío |
| fechaRegistro | Date | Fecha de registro |

### Validaciones implementadas

- Los campos pedidoId, remitente, destinatario y direccionEntrega son obligatorios.
- pedidoId debe ser único.
- Se eliminan espacios innecesarios al inicio y al final de los campos de texto.
- El estado solo admite: pendiente, en tránsito y entregado.
- Si no se especifica el estado, se asigna automáticamente pendiente.
- La fecha de registro se genera automáticamente.
- Mongoose administra las fechas de creación y actualización mediante timestamps.

## 7. Endpoints de la API

La ruta base es:

```text
http://localhost:3000/api/envios
```

| Método | Endpoint | Función |
|---|---|---|
| POST | /api/envios | Registrar un envío |
| GET | /api/envios | Listar todos los envíos |
| GET | /api/envios/activos | Listar envíos pendientes o en tránsito |
| GET | /api/envios/:id | Consultar un envío por ID |
| PUT | /api/envios/:id | Actualizar los datos de un envío |
| PATCH | /api/envios/:id/estado | Actualizar el estado del envío |
| DELETE | /api/envios/:id | Eliminar un envío |

## 8. Ejemplo de registro de un envío

Método: POST

URL:

```text
http://localhost:3000/api/envios
```

Body (JSON):

```json
{
  "pedidoId": "FS001",
  "remitente": "Carlos Ramirez",
  "destinatario": "Maria Lopez",
  "direccionEntrega": "Av. Los Heroes 123, Huancayo",
  "estado": "pendiente"
}
```

Respuesta esperada: código HTTP 201 y confirmación del registro.

## 9. Ejemplo de actualización de estado

Método: PATCH

URL:

```text
http://localhost:3000/api/envios/ID_DEL_ENVIO/estado
```

Body (JSON):

```json
{
  "estado": "en tránsito"
}
```

## 10. Manejo de errores

Los controladores implementan bloques try/catch para gestionar errores durante las operaciones con MongoDB.

Se utilizan códigos HTTP como:

- 201: registro creado correctamente.
- 200: operación realizada correctamente.
- 400: solicitud o identificador inválido.
- 404: envío no encontrado.
- 500: error interno al consultar información.

## 11. Justificación técnica

Se eligió Express.js porque permite organizar las rutas y controlar las solicitudes HTTP de forma sencilla y estructurada.

Se utilizó MongoDB porque permite almacenar documentos de manera flexible, mientras que Mongoose facilita la definición del modelo, la validación de los campos y la interacción con la base de datos.

La separación del proyecto en modelos, controladores y rutas permite mantener el código organizado, facilita su mantenimiento y permite ampliar las funcionalidades del sistema.

Asimismo, se implementaron validaciones y manejo de errores para mejorar la confiabilidad de las operaciones.

## 12. Pruebas realizadas

Las pruebas de funcionamiento se realizaron utilizando Postman y MongoDB Compass.

Se verificaron las siguientes operaciones:

- Registro de envíos mediante POST.
- Consulta de todos los envíos mediante GET.
- Búsqueda de un envío por su identificador.
- Actualización del estado mediante PATCH.
- Actualización de los datos mediante PUT.
- Eliminación de un envío mediante DELETE.
- Verificación de los registros almacenados en MongoDB Compass.

## 13. Autor

Proyecto académico individual – FastShipAPI.

Desarrollado como actividad práctica de la semana 8.