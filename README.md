# [koa-ts-base-template](https://github.com/SimpleCodeCX/koa-ts-base-template)
This is a basic of koa project structure, integrated with ts. 

## Features

✓ [koa v2](https://github.com/koajs/koa)

✓ [Typescript](https://github.com/koajs/koa)

✓ [Jest](https://github.com/facebook/jest)

✓ [APIDOC](https://apidocjs.com/)

✓ [Docker](https://www.docker.com/)

✓ [Eslint](https://github.com/eslint/eslint)

✓ [Husky](https://github.com/typicode/husky)

## Installation CLI

```javascript
 npm i -g koa-ts-cli
```

## Create Project

```javascript
 koats create myProject
 # Choose koa-ts-base-template option.
 
 cd myProject
 npm install
```

## In Development Mode

```javascript
 cd myProject
 npm run dev
```

## In Porduction Mode

```javascript
 npm run build
 cd myProject/dist
 npm run prod
```

## Run In Docker

```javascript
 cd myProject
 npm install
 npm run build
 sudo docker build -t koa-ts-api-server .
 sudo docker run -it --name koa-ts-api-server -p 8080:8080 koa-ts-api-server
```

or 

```javascript
 cd myProject
 ./docker-build.sh
 sudo docker run -it --name koa-ts-api-server -p 8080:8080 koa-ts-api-server
```

## Test

Unit test can be used to ensure the quality of the code.

```javascript
 cd myProject
 npm run test
```

## Generate Apidoc

```javascript
 npm run apidoc
```
