<h1 align="center">
	<img alt="Logo" src="https://i.imgur.com/4OeuwN8.png" width="200px" />
</h1>

<h3 align="center">
  API Gobarber
</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/rodolfomarriel/goBarberBackEnd">
  
  <img alt="GitHub number languages" src="https://img.shields.io/github/languages/count/rodolfomarriel/goBarberBackEnd">  

  <a href="https://www.linkedin.com/in/rodolfo-marriel-a8876286/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Rodolfo%20Marriel-lightgrey">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/rodolfomarriel/goBarberBackEnd">  
  
  <a href="https://github.com/rodolfomarriel/goBarberBackEnd/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/rodolfomarriel/goBarberBackEnd">
  </a>
  
  <a href="https://github.com/rodolfomarriel/goBarberBackEnd/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/rodolfomarriel/goBarberBackEnd">
  </a>
  
</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<p id="insomniaButton" align="center">
  <a href="" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

## 👨🏻‍💻 About the project

<p style="color: red;">API used to power the gobarber application</p>

To see the **web client**, click here: [GoBarber Web](https://github.com/rodolfomarriel/goBarberFrontEnd)</br>
To see the **mobile client**, click here: [GoBarber Mobile](https://github.com/rodolfomarriel/goBarberFrontendMobile)

## 🚀 Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://github.com/expressjs/multer)
- [TypeORM](https://typeorm.io/#/)
- [JWT-token](https://jwt.io/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [PostgreSQL](https://www.postgresql.org/)
- [Redis](https://redis.io/)
- [MongoDB](https://www.mongodb.com/)
- [Date-fns](https://date-fns.org/)
- [Jest](https://jestjs.io/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Getting started

Import the `Insomnia.json` on Insomnia App or click on [Run in Insomnia](#insomniaButton) button

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)
- One instance of [Redis](https://redis.io/)
- One instance of [MongoDB](https://www.mongodb.com/)

> Obs.: I recommend use docker

**Clone the project and access the folder**

```bash
$ git clone https://github.com/rodolfomarriel/goBarberBackEnd.git && cd goBarberBackEnd
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Create the instance of postgreSQL using docker
$ docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# Create the instance of redis using docker
$ docker run --name redis -p 6379:6379 -d -t redis:alpine

# Create the instance of mongodb using docker
$ docker run --name mongodb -p 27017:27017 -d -t mongo

# Make sure the keys in 'ormconfig.json' to connect with your database
# are set up correctly.

# Once the services are running, run the migrations
$ yarn typeorm migration:run

# To finish, run the api service
$ yarn dev:server

# Well done, project is started!
```

---

Made by Rodolfo Marriel 👋 [See my linkedin](https://www.linkedin.com/in/rodolfo-marriel-a8876286/)
