## Taller Reacjs - Fundamentos

# Configuración
.- Instalar  [Nodejs versión LTS](https://nodejs.org/es/)

.- Instalar Manejador de dependencias [Yarn](https://yarnpkg.com)


.- Instalar Editor de código [Visual Studio Code](https://code.visualstudio.com/)



# Creación App Base
.- Creación de la App base y entorno de configuración:

```
yarn create react-app my-app
```
![alt text](https://camo.githubusercontent.com/e4f2feecb8bc0d58c1f2e31f97b2856a04b50ef3/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f66616365626f6f6b2f6372656174652d72656163742d61707040323762343261633765666130313866323534313135336162333064363331383066356661333965302f73637265656e636173742e737667)

.- Estructura de carpetas creada

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```

.- Ejecutar la aplicación

```
cd my-app && yarn start
```
# Script disponibles: 

En el directorio del proyecto ejecutar por terminal los siguientes comandos:

### `yarn start`

Ejecuta la app en modo desarrollo.<br />
Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

La página se volverá a cargar al realizar modificaciones.<br />
Los errores de lint aparecerán en la consola.

### `yarn test`

Inicia el mode de test en modo interactivo.<br />
<br />

Para obtener más información visite  [running tests](https://facebook.github.io/create-react-app/docs/running-tests)

### `yarn build`

Permite crear la aplicación para producción quedando en la carpeta `build`. <br />
Empaqueta y optimiza el código para obtener el mejor rendimiento.
La compilación es minificada incluyendo hashes en los nombres de los archivos.
<br />

Para obtener más información visite  [deployment](https://facebook.github.io/create-react-app/docs/deployment)


# Instalar Json-Server
(Api de desarrollo)

## Instalación
```npm install -g json-server```

## Creación de archivo con datos

Crear archivo `db.json` con la siguiente estructura
```
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

## Iniciar Servidor
```json-server --watch -p 4000 db.json```


## Ingresar a [http://localhost:4000/posts/1](http://localhost:4000/posts/1)



# Documentación: 
.- [create-react-app](https://github.com/facebook/create-react-app)

.- [Reactjs](https://es.reactjs.org/)

.- [Redux](https://es.redux.js.org/)

.- [json-server](https://github.com/typicode/json-server)

