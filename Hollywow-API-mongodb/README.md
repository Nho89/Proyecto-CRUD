

<h1> 🎞 Hollywow-API 🎟</h1>
This project consists in the Back-end of an API called Hollywow, which consists of performing the __CRUD__ method using POST (Create), GET (Read), PUT (Update) and DELETE (Delete) requests, with several technologies.


# Index

+ [Description](#description)
+ [Project Configuration](#project-configuration)
+ [Initialize the Postman](#initialize-the-postman)
+ [Test](#test)
+ [Project Structure ](#project-structure)
+ [Technologies](#technologies)
+ [Authors](#authors)
+ [Contributions](#contributions)

# Description
We have developed the application to manage films data, to allow the users to record the information of the poster´s movies.

## Project Configuration

1. **Clone the Repository:**

`bash`
* Copy code in your terminal: `git clone https://github.com/leiteway/Hollywow-API.git`
* Copy code in your terminal: `cd Hollywow-API` <br>
To enter the repository folder.


2. **Create the file __.env__**
   
* Create the file __.env__ located in the folder "Hollywow-API"
* Copy the information placed on ´.env_example´ and fill it with your personal data


3. **Install Dependencies:** 

`bash`
* Copy code: `npm install`
* Copy code to make the server run: `npm run dev`
This will start the server __http://localhost:5000__ using the database on MySQL Workbench.

## Initialize the Postman

[Doc. Postman.pdf](https://github.com/leiteway/Hollywow-API/files/14641270/Doc.Postman.pdf)
<h3>routes-HollywowApi</h3>
Methods in Postman to view, add, edit, and delete movie posters in our database.
<h4>GET routGet</h4> <br>
http://localhost:5000/api <br>
Route to do the method GET from the CRUD of our project, including our URL and an example of the response. <br>
<img width="600" alt="Captura de pantalla 2024-03-18 a las 20 22 39" src="https://github.com/leiteway/Hollywow-API/assets/152177946/610a4cc4-c773-4c18-9ea5-2ba53af12a4d">
<h4>DELETE routDelete</h4> <br>
http://localhost:5000/api/ <br>
Route to do the method DELETE from the CRUD of our project, including our URL and an example of the response. <br>
<img width="600" alt="Captura de pantalla 2024-03-18 a las 20 25 10" src="https://github.com/leiteway/Hollywow-API/assets/152177946/22c177f7-1732-41e2-b295-bb70d643ae92">
<h4>PUT routPut</h4> <br>
http://localhost:5000/api/4 <br>
Route to do the method PUT from the CRUD of our project, including our URL and an example of the response. <br>
<img width="600" alt="Captura de pantalla 2024-03-18 a las 20 31 21" src="https://github.com/leiteway/Hollywow-API/assets/152177946/89ab25bd-f99c-4a7a-ae27-09605f3c92a3">
<h4>POST routPost</h4> <br>
http://localhost:5000/api <br>
Route to do the method POST from the CRUD of our project, including our URL and an example of the response. <br>
<img width="600" alt="Captura de pantalla 2024-03-18 a las 20 31 56" src="https://github.com/leiteway/Hollywow-API/assets/152177946/2780a1f6-049a-45ca-a03a-0e5fbeafd1dc">
<h4>GET routGetById</h4> <br>
http://localhost:5000/api/ <br>
Route to do the method GET BY ID from the CRUD of our project, including our URL and an example of the response. <br>
<img width="600" alt="Captura de pantalla 2024-03-18 a las 20 29 43" src="https://github.com/leiteway/Hollywow-API/assets/152177946/df025051-7fcf-48ff-8582-6aaff48876c8">


## Test

* Copy code: `npm run test`
This will run the tests.


## Project Structure 

* __controllers:__ to handle HTTP requests.
* __database:__ configuration of connections with the database.
* __helpers:__ contains the import and export validations from express-validator.
* __models__: the model of database.
* __node_modules:__ contains all the dependencies of your project. When you install packages using npm, they are stored here.
* __routes:__ route definitions for the methods of the API.
* __test:__ unit and integration tests in one file.
* __validators:__ contains the validations of the methods of the CRUD.
* __.env:__ is a configuration file commonly used to store environment variables.
* __.gitignore:__  specifies files and folders ignored by Git to prevent irrelevant or automatically generated files from being tracked.
* __app.js:__ entry point of the application.
* __config.js:__ application configuration, such as database and server configuration.
* __package.json and package-lock.json:__ these files contain metadata about your project and its dependencies. They also include scripts for running various tasks like starting the development server or building the production bundle.
* __README.md:__ this file typically contains instructions on how to set up and run your project, as well as any other relevant information for contributors or users.


# Technologies

<img width="50" src="https://cdn.worldvectorlogo.com/logos/trello.svg">&nbsp;
<img width="50" src="https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png" >&nbsp;
<img width="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" >&nbsp;
<img width="50" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg">&nbsp;
<img width="50" src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png">&nbsp;
<img width="50" src="https://user-images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png">&nbsp;
<img width="50" src="https://media.licdn.com/dms/image/C560BAQHQH8_cFFK_3A/company-logo_200_200/0/1630606810347/drawsql_logo?e=2147483647&v=beta&t=aWOh8DYdF-g2BWxZPlX4b3vXC2Omo0TOSxqO0JHKvws">&nbsp;
<img width="50" src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png">&nbsp;
<img width="50" src="https://user-images.githubusercontent.com/25181517/187955005-f4ca6f1a-e727-497b-b81b-93fb9726268e.png">&nbsp;
<img width="50" src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png">&nbsp;
<img width="50" src="https://cdn.worldvectorlogo.com/logos/nodemon.svg">&nbsp;
<img width="50" src="https://express-validator.github.io/img/logo.svg">&nbsp;
<img width="50" src="https://static-00.iconduck.com/assets.00/sequelize-original-icon-885x1024-r8dswyvj.png">&nbsp;


# Authors

 - Scrum Master: [Desirée Carrizosa](https://github.com/DesireeCSilva)
 - Product Owner: [Fatima Capilla](https://github.com/FatimaCapilla)
 - Web Developer: [J.Leite](https://github.com/leiteway)
 - Web Developer: [Nhoeli Salazar](https://github.com/Nho89)


# Contributions
Contributions are welcome! If you find any problems or have suggestions for improvement, please create an issue or make a pull request.
   
**[⬆️ Back to Index](#index)**
