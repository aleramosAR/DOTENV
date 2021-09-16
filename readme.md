# Agregar DOTENV

* #### Sobre el proyecto del último desafío entregable, utilizar dotenv pasando todas las configuraciones realizadas por línea de comandos a dos archivos: development.env y production.env. Trabajar con un esquema de múltiples entornos.

Cree 2 scripts, uno para desarrollo y otro para produccion, estos crear una variable de entorno llamada **NODE_ENV** con el valor ```development``` o ```production``` y pasan por minimist el nro. de puerto.

```
"dev": "NODE_ENV=development node server.js -p 9000",
"prod": "NODE_ENV=production node server.js -p 9000"
```

Si no se les pasa ningun parametro (ejecutando ```npm start```) el metodo de persistencia sera ```memory``` y el puerto sera ```8080```.
<br />
<br />

* #### Las configuraciones realizadas podrían ser: tipo de persistencia, credenciales para login con redes sociales, habilitación de modo cluster entre otras presentes en los proyectos de cada uno.

Cree 2 archivos, ```development.env``` y ```production.env``` y puse las variables de entornos en ellos.
<br />
<br />

* #### En modo desarrollo, elegir el tipo de persistencia Memory ó File system.

En ```development.env``` asigne a la variable **PERSISTENCIA** el valor ```file```.
<br />
<br />

* #### En modo producción, elegir el tipo de persistencia MongoDB ó MySQL/SQLite3.

En ```production.env``` asigne a la variable **PERSISTENCIA** el valor ```mongo```.
<br />
<br />


* #### La única configuración que no va a ser manejada con dotenv va a ser el puerto de escucha del servidor. Utilizar minimist o yargs para realizar esta configuración. En el caso de no pasar este parámetro por línea de comandos, tomar como default el puerto 8080.

Por medio de ***minimist*** estoy pasando el valor ```9000``` como nro. de puerto.