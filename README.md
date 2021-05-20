# Challenge Backend

## Detalle de challenge:

Desarrollar una API para un blog, utilizando Node y Express. Los datos deberán ser persistidos en una base de datos MySQL, utilizando Sequelize. Esta API deberá devolver datos en formato JSON.

Cada post deberá contener los siguientes campos:
ID,
Título ,
Contenido ,
Imagen,
Categoría,
Fecha de creación.


### Inicializamos el proyecto con:
npm init -y

###  Configuramos Eslint y Prettier

###  Instalamos las dependencias de producción:

npm i express

npm i dotenv

### Para trabajar con peticiones POST

npm i body-parser

###  Instalamos las dependencias de desarrollo.

 npm i -D nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier

### Finalmente para que nuestro código haga el formateo automático cada vez que se hace commit y se sube al repositorio vamos a instalar 

npm install mrm mrm-task-lint-staged --save-dev

npx mrm lint-staged

### Instalamos en nuestra computadora  xampp

https://www.apachefriends.org/es/index.html

Una vez arrancado el servicio Xampp vamos a:

http://localhost/phpmyadmin/

y creamos una base de datos llamada blog

###  Creamos el archivo .env para crear las variables de entorno donde van a estas las credenciales para conectarse a la base de datos.

###  Instalamos el ORM Sequelize:

npm i sequelize

###  Ahora instalamos los driver de mysql

npm i mysql2


### Instalamos una librería para validar los datos que ingreso a la base de datos.

npm i express-validator

### Para descargar el proyecto:

git clone git@github.com:mgsanchezdev/blog-backend.git

cd blog-backend

npm install

En consola ejecutar el comando:

 npm run dev

 con esto arranca el servidor, la primera vez crea las tablas y esta listo para hacer las peticiones con un software como Postman.

 Los EndPoint son:

Obtengo todos los post:

 Petición GET: http://localhost:3000/api/posts/

Guardo el post que cree:

Petición POST: http://localhost:3000/api/posts/

Obtengo un post en particular

Petición GET: http://localhost:3000/api/posts/postId

Modifico un post en particular:

Petición PUT: http://localhost:3000/api/posts/postId

Elimino un post en particular:

Petición DELETE: http://localhost:3000/api/posts/postId
