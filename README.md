<a name="readme-top"></a>
<h1>Fincas Backend</h1>

Fincas is an management application for the Consejo General de Colegios de Administradores de Fincas de la Comunitat Valenciana

## Index

1. [Introduction](#1-introduction)
2. [Installation](#2-installation)
   - [Main Dependencies](#21-main-dependencies)
   - [Secondary Dependencies](#22-secondary-dependencies)
   - [Development Dependencies](#23-development-dependencies)
3. [Server start](#3-server-start)
   - [HTTP Requests](#31-http-requests)
4. [Configuration](#4-configuration)
5. [Requirements](#5-requirements)
6. [Contribution](#6-contribution)
7. [Acknowledgments](#7-acknowledgments)

## 1. Introduction

This project is a database designed with well-defined relationships between tables, and a subsequently developed REST API that meet the next objectives and specified requirements for the management of the Consejo General de Colegios de Administradores de Fincas, with Node.js and Express technologies, coupled with MongoDB/Mongoose, a robust REST API for an online management application.
Opted for the Model-View-Controller (MVC) pattern in structuring our project, driven by the aim of achieving an efficient and visually organized application. The MVC architecture divides our system into three key components: the Model, responsible for managing data and implementing business logic; the View, handling visual representation and user interface; and the Controller, managing control logic and user interaction.

## 2. Installation

### 2.1. Main Dependencies


These dependencies are essential for building a Node.js application that efficiently interacts with a MongoDB database using Sequelize and for creating a web server or API using Express.

**Express** 

Express stands out as a widely embraced web application framework within the Node.js ecosystem. It streamlines the development of web servers and APIs by offering a structured approach to managing routes, HTTP requests, and responses. With Express, creating efficient and scalable web applications becomes more accessible and straightforward.

```
npm install express
```

**Mongoose**

Database drivers are crucial for establishing connections and facilitating communication with a specific database. In the context of Sequelize, you require a compatible database driver for Sequelize to connect to and manage your database. In this case, Mongoose is highlighted because it is commonly used for MongoDB databases. Depending on the database system you are working with (e.g., PostgreSQL, SQLite, etc.), you will need to install the corresponding driver to ensure seamless integration with Sequelize.

```
npm install mongoose
```

### 2.2. Secondary Dependencies

Here is a list of dependencies utilized in this backend project, accompanied by concise explanations of their functionalities and instructions on how to install them.

1. **axios**: Axios is a library designed for making HTTP requests in both Node.js and browser environments. You can install it using the following command:

```
npm install axios
```

2. **bcryptjs**: Bcryptjs is a library dedicated to secure password hashing. To install it, use the following command:

```
npm install bcryptjs
```

3. **cors**: Cors is an Express middleware facilitating communication between different domains. Install it using the following command:

```
npm install cors
```

4. **dotenv**: Cors serves as an Express middleware that enables communication across diverse domains. To install Cors, utilize the following command:

```
npm install dotenv
```

5. **jsonwebtoken**: Jsonwebtoken is employed for generating and verifying JSON Web Tokens (JWTs) used in authentication. To install it, use the following command:

```
npm install jsonwebtoken
```

6. **multer**: Multer is middleware designed for managing forms and handling file uploads in Express. To install it, use the following command:
```
npm install multer
```

7. **nodemailer**: Nodemailer is utilized for sending emails from a Node.js application. To install it, use the following command:

```
npm install nodemailer
```

8. **sequelize-cli**: Sequelize CLI is a command-line tool for Sequelize. Install it using the following command:
```
npm install sequelize-cli
```

9. **swagger-jsdoc**: Swagger JSDoc is employed to generate Swagger documentation from JSDoc comments within your code. To install it, use the following command:

```
npm install swagger-jsdoc
```

10. **swagger-ui-express**: Swagger UI Express furnishes a user interface for exploring and testing Swagger documentation. Install it using the following command:

```
npm install swagger-ui-express
```


11. **uuidv4**: Uuidv4 is employed for generating universally unique identifiers (UUIDs) in accordance with the UUIDv4 specification. To install it, use the following command:

```
npm install uuidv4
```

### 2.3 .Development Dependencies

Here is a compilation of development dependencies employed in this project, accompanied by concise explanations of their functionalities and instructions on how to install them.

1.  **jest**: Jest is a JavaScript unit testing framework employed for writing and executing unit tests for your code. Install it using the following command:

```
npm install -d jest
```

2. **nodemon**: Nodemon is a tool that monitors changes in your project files and automatically restarts the Node.js server upon detection of modifications. To install Nodemon, use the following command:

```
npm install -d nodemon
```

3. **supertest**: Supertest is a library employed for conducting integration tests on HTTP/Express applications. To install Supertest, use the following command:

```
npm install -d supertest
```

## 3. Server start

To start the server, you can use the following command:

```
npm start
```

Execute this command to initiate and run the server. Ensure that the server is operational before initiating any requests.

### 3.1 HTTP Requests

The backend provides multiple API endpoints for interacting with the application. Below are examples of HTTP requests you can utilize:

#### Get all

```
GET http://localhost:3001/-/getall
```

#### Create 

```
POST http://localhost:3001/-/create

Body JSON:

{
    "-": -,
}
```
If you need more information about the API, feel free to visit our [Swagger documentation]().

## 4. Configuration

### 4.1 Database Connection

In order to establish a connection to the MongoDB database, it is necessary to first configure the credentials for proper connectivity. This involves defining the database details such as the host address, username, password, and database name. All the required parameters for the connection can be found in the example.env file, and all the user needs to do is set up the connection with their own data.

### 4.2 Deployment

Our project has been deployed on the Amazon Web Service (AWS)/Flo 

### 4.3 Credentials

The project must have an .env file, which will contain all the environment variables used for both database connection and project deployment configuration. Among our files, you will find an example.env file that you can use as a template to input your own data if you wish to continue the development of this project.

## 5. Requirements

**Minimum Requirements:**

1. **Operating System:**
   - No specific operating system is required; the project is compatible with various operating systems such as Windows, macOS, and various Linux distributions.

2. **Node.js:**
   - You must have Node.js installed on your system. The latest LTS version of Node.js is recommended.

3. **Database:**
   - This project uses a MySQL database. Ensure you have access to a MySQL instance or set it up as per the project's specifications.

4. **Web Browser:**
   - To access the API documentation and test the functionalities, it's recommended to use a modern web browser like Google Chrome or Mozilla Firefox.

5. **Node.js Dependencies:**
   - Install project dependencies using the `npm install` command in the project's root to ensure that all required libraries are available.

6. **Code Editor (Optional):**
   - To customize the project or make code modifications, you can use a code editor of your choice, such as Visual Studio Code or Sublime Text.


## 6. Contribution

Your contributions are sincerely valued. If you have any suggestions to improve it, please consider forking the repository and initiating a pull request.

1. **Fork the Repository**

   To get started, fork the Eventum repository to your GitHub account. This will create a copy of the project that you can freely experiment with.

2. **Clone the Repository**

   Clone your forked repository to your local development environment using the following command (replace `[your_username]` with your GitHub username):

   ```
   git clone https://github.com/[your_username]/Fincas_Back.git
   ```

**Create a new branch**
Before making any changes, create a new branch for your contribution. This helps keep the main branch clean and allows for a focused contribution:

```
git checkout -b my-contribution
```

**Make Changes and Commit**
Make the necessary changes or additions to the codebase. Once you're satisfied with your changes, commit them using descriptive commit messages:

```
git commit -m "Add feature: [your feature description]"
```

**Push to Your Fork**
Push your changes to your forked repository on GitHub:

```
git push origin my-contribution
```

## 7. Acknowledgments
**Special Thanks to the Development Team**

A heartfelt thank you to our UX/UI, Data Science and FullStack team for their collaborative efforts in bringing this project to fruition. The dedication has exceeded expectations, and each team member's role has been indispensable.

The development teams translated concepts into tangible solutions, the design teams added creativity and the data specialists provided clarity ensured platform integrity. Despite challenges, your professionalism and resilience fostered a positive work environment crucial to our success.

Expressing gratitude for your commitment is beyond words. This project stands as evidence of our collective capabilities, we look forward to achieving more milestones together in the future. Thank you for your hard work and dedication.

## <h2><samp>🖊️ License </samp></h2>

This project is under license of [Francesc Alberola](https://github.com/cescalberola) & [Vero Polegre](https://github.com/VeroPolegre)

### <h2><samp>⭐️ How to reach us! </samp></h2>

<div style="display: flex; justify-content: center; align-items: center;">
  <div style="text-align: center; margin-right: 20px;">
    <img src="https://avatars.githubusercontent.com/u/128794614?v=4" alt="Francesc Alberola" width="50" height="50" style="border-radius: 50%;"> <a href="https://www.linkedin.com/in/francescalberola/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
  </div>

  <div style="text-align: center; margin-right: 20px;">
    <img src="https://avatars.githubusercontent.com/u/145065743?s=96&v=4" alt="Verónica Polegre" width="50" height="50" style="border-radius: 50%;"> <a href="https://www.linkedin.com/in/veronica-polegre/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
  </div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
