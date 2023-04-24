const inquirer = require("inquirer");
const fs = require("fs");
questions=[{
    type: 'input',
    message: "Please enter up to three characters: ",
    name: "characters"
},
{
    type: 'input',
    message: "Enter a color keyword, or hexadecimal number: ",
    name: "color"
},
{
    type: 'list',
    message: "Please select a shape.",
    name: "shapes",
    choices: ['circle', 'triangle', 'square']
},
{
    type: 'input',
    message: "Enter the shape's color: ",
    name: "shapeColor"
}]
function promptUser(){
inquirer.prompt(questions);
}
function createFile(name, data){
    fs.writeFile(name, data, (err) =>{
        if(err){
            throw new Error(err);
        }
        console.log("File was written successfuly.");
       })
}
promptUser();