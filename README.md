# Henry Workshop - React Native

## Overview

En este workshop vamos a crear una aplicación mobile utilizando React Native, para ello usaremos Expo para generar el boilerplate inicial y sobre el modificar lo necesario para elaborar la aplicación que se describirá a continuación.

## Setup Inicial

```bash
  // Instalamos expo-cli
  npm install -g expo-cli

  // Inicializamos un proyecto en este caso llamado MarvelApp
  expo init MarvelApp

  // Podemos ya probar su funcionamiento
  cd MarvelApp
  npm start
```

## Objetivo

La idea del workshop es crear una aplicación sobre Marvel en la cual se incluyan por lo menos las siguientes funcionalidades:

 - Poder mostrar un listado de todos los personajes de Marvel (Incluyendo nombre y foto)
 - Poder filtrar el listado de personajes a partir de un input que ingrese el usuario y devuelva solo los personajes que comiencen con dicha palabra
 - Poder ir al detalle del personaje donde se deben poder seleccionar dos subpantallas:
    * Ver nuevamente el nombre y su foto pero también agregando la descripción 
    * Ver un listado de comics en los cuales aparece dicho personaje
- EXTRA: Poder agregar/quitar personajes a una lista de favoritos

## Imagenes ilustrativas de ejemplo

TODO

## Configuración API

Para poder obtener los resultados de los request a la API de Marvel vamos a necesitar contar con una API Key que la obtendremos creando una cuenta en https://developer.marvel.com/ y luego yendo a la sección "Get a Key", allí encontraran tanto una clave pública como una privada (Ambas serán necesarias).

La URL del request se formará de la siguiente forma:

http://gateway.marvel.com/v1/public/characters?ts={ts}&apikey={publicKey}&hash={md5Hash}

Donde:
 * ts: es un timestamp en el cual pueden ingresar cualquier valor, por ejemplo `henry`
 * publicKey: es la clave pública que les figura en la sección que recién mencionamos arriba
 * md5Hash: es un hash utilizando md5 y pasandole como inputs ts, privateKey y publicKey

Como siempre estos datos son sensibles por lo que lo recuerden no subirlos a su repositorio de código. Para evitar esto tienen instalado como dependencia dentro del proyecto el módulo `react-native-dotenv`. Adicionlamente ya se encuentra configurado en el archivo `babel.config.js` dentro de `plugins`:

```js
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module:react-native-dotenv", {
        "moduleName": "@env",
        "path": ".env",
        "blacklist": null,
        "whitelist": null,
        "safe": false,
        "allowUndefined": true
      }]
    ]
  };
};
```

Esto les va a permitir utilizar cualquier variable definida dentro de un archivo `.env` que debe estar definido al mismo nivel del archivo de configuración de babel. En nuestro caso ustedes deberían definir las siguientes propiedades:

```
publicKey=...
privateKey=...
```

Luego podrán utilizarlas desde cualquier archivo del proyecto importándolas de la siguiente forma:

```js
import { publicKey, privateKey } from '@env';
```