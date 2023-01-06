[![App version](https://img.shields.io/badge/App-0.0.0-brightgreen.svg)](https://www.npmjs.com/package/photos-analysis)
[![Capacitor version](https://img.shields.io/badge/Capacitor-4.6.1-brightgreen.svg)](https://www.npmjs.com/package/@capacitor/core)
[![Ionic version](https://img.shields.io/badge/Ionic-6.4.1-brightgreen.svg)](https://www.npmjs.com/package/@ionic/angular)
[![Angular version](https://img.shields.io/badge/Angular-15.0.0-brightgreen.svg)](https://www.npmjs.com/package/@angular/core)
[![Android support](https://img.shields.io/badge/Android-yes-brightgreen.svg)](https://developer.android.com/index.html)

# photos-analysis

- La idea principal del proyecto es poder capturar fotos desde un celular y poder enviar la foto a un servidor y que desde el servidor pueda devolver metadatos de la foto según un análisis del mismo, este es un prototipo pensado para un futuro proyecto de análisis de datos más robusto.
- Este proyecto utiliza Angular como framework principal y está basado en el Ionic Framework para el desarrollo de aplicaciones móviles híbridas.

## Scripts

- `ng`: Ejecuta el comando de Angular CLI.
- `start`: Inicia un servidor de desarrollo y hace que la aplicación esté disponible en http://localhost:4200/.
- `build`: Genera una build de producción de la aplicación en la carpeta `dist/`.
- `watch`: Genera una build de desarrollo de la aplicación en la carpeta `dist/` y la actualiza automáticamente cuando se detectan cambios en los archivos.
- `test`: Ejecuta las pruebas unitarias de la aplicación con Karma.

## Dependencias

- `@angular/*`: Dependencias de Angular utilizadas para el desarrollo de la aplicación. Versión: `^15.0.0`.
- `@capacitor/android`: Dependencia de Capacitor necesaria para utilizar Capacitor en aplicaciones Android. Versión: `^4.6.1`.
- `@capacitor/angular`: Dependencia de Angular para usar Capacitor en aplicaciones Angular. Versión: `^2.0.3`.
- `@capacitor/camera`: Plugin de Capacitor que permite acceder a la cámara del dispositivo móvil. Versión: `^4.1.4`.
- `@capacitor/core`: Dependencia principal de Capacitor. Versión: `latest`.
- `@ionic/angular`: Dependencias de Ionic para el uso del framework Angular. Versión: `^6.4.1`.
- `@ionic/pwa-elements`: Dependencias de Ionic para el uso de elementos de PWA en aplicaciones móviles híbridas. Versión: `^3.1.1`.
- `rxjs`: Biblioteca de programación reactiva utilizada en Angular.
- `tslib`: Biblioteca que proporciona funciones de utilidad y utilizadas por Angular. Versión: `^2.3.0`.
- `zone.js`: Biblioteca utilizada para permitir el cambio de contexto de ejecución de manera automática. Versión: `~0.12.0`.

## Dependencias de desarrollo

- `@angular-devkit/build-angular`: Dependencias de Angular utilizadas para el desarrollo y la construcción de la aplicación. Versión: `^15.0.4`.
- `@angular/cli`: Herramienta de línea de comandos de Angular utilizada para el desarrollo y la generación de builds de la aplicación. Versión: `~15.0.4`.
- `@angular/compiler-cli`: Dependencias de Angular utilizadas para la compilación de la aplicación. Versión: `^15.0.0`.
- `@capacitor/cli`: Herramienta de línea de comandos de Capacitor utilizada para la gestión de plataformas y la generación de builds. Versión: `latest`.
- `@ionic/angular-toolkit`: Herramienta de Ionic utilizada para el desarrollo y la generación de builds de la aplicación. Versión: `latest`.
- `@types/jasmine`: Dependencia de tipos de TypeScript para el framework de pruebas unitarias Jasmine. Versión: `~4.3.0`.
- `jasmine-core`: Dependencia principal de Jasmine, utilizada para ejecutar las pruebas. Versión: `~4.5.0`.
- `karma`: Runner de pruebas utilizado para ejecutar las pruebas de Jasmine en un navegador. Versión: `~6.4.0`.
- `karma-chrome-launcher`: Plugin de Karma que permite ejecutar las pruebas en Google Chrome. Versión: `~3.1.0`.
- `karma-coverage`: Plugin de Karma que permite generar informes de cobertura de pruebas. Versión: `~2.2.0`.
- `karma-jasmine`: Plugin de Karma que permite ejecutar pruebas de Jasmine. Versión: `~5.1.0`.
- `karma-jasmine-html-reporter`: Plugin de Karma que permite generar informes de pruebas en formato HTML. Versión: `~2.0.0`.
- `typescript`: Lenguaje de programación utilizado en Angular. Versión: `~4.8.2`.
