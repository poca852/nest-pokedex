<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar
```
yarn install 
```
3. Tener Nest CLI Instalado
```
npm i -global @nestjs/cli
```
4. Levantar la base de datos
```
docker-compose up -d
```

5. Clonar el archivo __.env.template__ y renombrar a __.env__ 

6. Llenar las variables de entorno definidas en el __.env__

7. Ejecutar la aplicaciòn en modo de desarrollo con el siguiente comando:
```
yarn start:dev
```

6. Reconstruir la base de datos con la semilla
```
http://localhost:3000/api/v2/seed
```

## Stack usado
* MongoDb
* Nest