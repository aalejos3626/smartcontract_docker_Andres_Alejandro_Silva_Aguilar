# smartcontract_docker_Andres_Alejandro_Silva_Aguilar

Autor: Andrés Alejandro Silva Aguilar

## Descripción

En este repositorio en GITHUB describo el desarrollo de mi primer contrato inteligente o smart contract empaquetado en Docker, este trabajo ha sido creado como parte de la Tarea: Implementación inicial de smart contract en contenedor Docker.
Mi proyecto inicial tiene como objetivo la creación de una plataforma de certificación digital basada en blockchain que cubre la emisión, validación de certificados digitales. La solución se inicia a partir de una situación problemática actual, como la falsificación y manipulación de certificados académicos o profesionales. Para poder mitigar este riesgo, el contrato inteligente no almacena el documento completo ni datos personales de la persona titular de tal documento, almacenando, en su lugar, únicamente hashes criptográficos obteniendo datos de verificación de la integridad, autenticidad, estado y trazabilidad del certificado de forma segura.

## Objetivo de la práctica

El objetivo principal de esta práctica es la creación de un proyecto de smart contract básico, empaquetarlo en Docker, publicarlo en Docker Hub y subir el código fuente a GitHub.

De esta forma, el proyecto puede ser revisado y ejecutado desde un contenedor Docker.

## Estructura del proyecto

El repositorio está organizado de la siguiente manera:

smartcontract_docker_Andres_Alejandro_Silva_Aguilar/

contracts/
- CertificacionCredenciales.sol

test/
- CertificacionCredenciales.test.js

scripts/
- demo.js

Dockerfile
package.json
hardhat.config.js
README.md
.gitignore
.dockerignore

## Descripción de archivos principales

contracts/CertificacionCredenciales.sol: Este archivo incluye el smart contract principal.
test/CertificacionCredenciales.test.js: Este archivo contiene las pruebas automatizadas del contrato.
scripts/demo.js: Este archivo incluye un ejemplo básico de ejecución.
Dockerfile: Este archivo define la construcción de la imagen Docker.
package.json: Este archivo contiene dependencias y scripts del proyecto.
hardhat.config.js: Este archivo incluye la configuración de Hardhat.
README.md: Este archivo contiene la descripción e instrucciones de la práctica.

## Smart contract o contrato inteligente

El contrato se llama: CertificacionCredenciales.

Sus funciones principales son:

-	Emitir certificados digitales.
-	Validar certificados mediante hashes.
-	Consultar información básica del certificado.
-	Revocar certificados emitidos.
-	Controlar emisores autorizados.

El contrato no guarda datos personales del titular ni el archivo completo del certificado. En vez de eso utiliza valores hash para validar la autenticidad e integridad de la información.

## Proceso realizado

Primero se generó la estructura del proyecto, separando el contrato inteligente o smart contract, las pruebas, el script de demostración y los archivos de configuración.

Luego se desarrolló el contrato CertificacionCredenciales.sol que permite manejar certificados digitales usando hashes.

Después se realizaron pruebas para validar el comportamiento del contrato. Estas pruebas verifican la emisión, validación y revocación de certificados.

Posteriormente se creó el archivo Dockerfile, con el objetivo de empaquetar el proyecto dentro de una imagen Docker.

Finalmente, el proyecto fue publicado en GitHub y la imagen fue subida a Docker Hub para su revisión.

## Ejecución con Docker

Para validar el funcionamiento del proyecto se utilizó Docker Desktop.

Construir la imagen Docker:

docker build -t smartcontract_docker_andres_alejandro_silva_aguilar:1.0 .

Ejecutar el contenedor:

docker run --rm smartcontract_docker_andres_alejandro_silva_aguilar:1.0

Al ejecutar el contenedor se ejecutan automáticamente las pruebas del smart contract con Hardhat. El resultado esperado es que las pruebas finalicen correctamente.

## La imagen Docker publicada se encuentra en:

https://hub.docker.com/r/alejos3626/smartcontract_docker_andres_alejandro_silva_aguilar

## Resultado esperado

Al ejecutar la imagen Docker, se deben ejecutar las pruebas automatizadas del contrato inteligente o smart contract.

El resultado esperado es:

5 passing

Esto indica que las pruebas del contrato finalizaron correctamente.

## Enlaces de entrega

Repositorio GitHub:

https://github.com/aalejos3626/smartcontract_docker_Andres_Alejandro_Silva_Aguilar

Código del contrato inteligente o smart contract:

https://github.com/aalejos3626/smartcontract_docker_Andres_Alejandro_Silva_Aguilar/blob/main/contracts/CertificacionCredenciales.sol

Imagen Docker Hub:

https://hub.docker.com/r/alejos3626/smartcontract_docker_andres_alejandro_silva_aguilar

## Evidencias recomendadas

Para la revisión de la práctica se pueden considerar las siguientes evidencias:

Repositorio GitHub con el smart contract visible.
Archivo Dockerfile dentro del repositorio.
Imagen publicada en Docker Hub.
Tag 1.0 publicado en Docker Hub.
Ejecución de la imagen Docker.
Resultado de pruebas exitosas mostrando 5 passing.

## Conclusiones

Esta práctica me permitió realizar mi primera implementación de un smart contract en un Docker container. Este proyecto permite entender el flujo básico de desarrollo, empaquetado y publicación de una aplicación de blockchain, aprovechando herramientas como Solidity, Hardhat, Docker, GitHub y Docker Hub.
