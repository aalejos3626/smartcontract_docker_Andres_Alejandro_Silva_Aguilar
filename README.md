# smartcontract_docker_Andres_Alejandro_Silva_Aguilar

Autor: Andres Alejandro Silva Aguilar

## Descripcion

Este proyecto corresponde a una practica inicial de smart contract ejecutado dentro de un contenedor Docker.

El tema del proyecto es la certificacion digital basada en blockchain. La idea principal es registrar la informacion de un certificado mediante hashes, sin guardar datos personales ni el archivo completo del certificado.

## Que contiene el proyecto

- contracts/CertificacionCredenciales.sol: contrato inteligente.
- test/CertificacionCredenciales.test.js: pruebas del contrato.
- scripts/demo.js: ejemplo de ejecucion.
- Dockerfile: archivo para crear la imagen Docker.
- package.json: dependencias y comandos.
- hardhat.config.js: configuracion de Hardhat.

## Ejecutar con Docker

Construir la imagen:

``bash
docker build -t smartcontract_docker_andres_alejandro_silva_aguilar:1.0 .
``

Ejecutar el contenedor:

``bash
docker run --rm smartcontract_docker_andres_alejandro_silva_aguilar:1.0
``

## Ejecutar sin Docker

Instalar dependencias:

``bash
npm install
``

Ejecutar pruebas:

``bash
npm test
``

Compilar el contrato:

``bash
npm run compile
``

Ejecutar demo:

``bash
npm run demo
``

## GitHub

Repositorio:

``text
https://github.com/aalejos3626/smartcontract_docker_Andres_Alejandro_Silva_Aguilar
``

## Docker Hub

Imagen publicada:

``text
https://hub.docker.com/r/alejos3626/smartcontract_docker_andres_alejandro_silva_aguilar
``

Comandos para descargar y ejecutar la imagen:

``bash
docker pull alejos3626/.0
docker run --rm alejos3626/.0
``

## Resultado esperado

Al ejecutar las pruebas debe mostrarse un resultado exitoso, por ejemplo:

``text
5 passing
``