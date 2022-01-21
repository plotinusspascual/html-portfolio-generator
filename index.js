const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
  {
    type: "input",
    message: "What is your name?",
    name: "name"
  },
  {
    type: "input",
    message: "Where are you from?",
    name: "location",
  },
  {
  type: "input",
  message: "What is your Github?",
  name: "github",
  },
  {
    type: "input",
    message: "What is your LinkedIn?",
    name: "linkedin",
  }  
  ])
  .then((response) => {
    console.log(response)

    let name = response.name;
    let location = response.location;
    let github = response.github;
    let linkedin = response.linkedin;

    let user = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css"/>
  </head>
  <body>
    <div id="container">
      <div  class="title" >My name is: ${name}</div>
      <div class="title" >My name is location: ${location}</div>
      <div class="title">My Github is: ${github}</div>
      <div class="title">My LinkedIn is: ${linkedin}</div>
    </div>
  </body>
  <!-- <script src="./script.js"></script> -->
  <!-- JQUERY js-->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
</html>`;


    fs.writeFile("index.html", user, (err) => 
      err ? console.error(err) : console.log("Success!")
      );
  });