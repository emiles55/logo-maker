const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square} = require('./lib/shapes.js')
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
    name: "shape",
    choices: ['Circle', 'Triangle', 'Square']
},
{
    type: 'input',
    message: "Enter the shape's color: ",
    name: "shapeColor"
}]

function createFile(name, data){
 //   let svgString = "";
  //  svgString =
 //     '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
 //   svgString += "<g>";
 //   svgString += `${answers.shape}`;
    fs.writeFile(name, data, (err) =>{
        if(err){
            throw new Error(err);
        }
        console.log("File was written successfuly.");
       })
}
function initializeShapes(data){
if(data.shape=='Circle'){
    const newCircle= new Circle(data.characters, data.color, data.shapeColor);
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${newCircle.render()}<text x="150" y="125" font-size="60" 
    text-anchor="middle" fill="${newCircle.color}">${newCircle.characters}</text></svg>`;
}
else if(data.shape=='Triangle'){
    const newTriangle= new Triangle(data.characters, data.color, data.shapeColor);
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${newTriangle.render()}<text x="150" y="125" font-size="60" 
    text-anchor="middle" fill="${newTriangle.color}">${newTriangle.characters}</text></svg>`
    
}
else if(data.shape=='Square'){
    const newSquare= new Square(data.characters, data.color, data.shapeColor);
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${newSquare.render()}<text x="150" y="125" font-size="60" 
    text-anchor="middle" fill="${newSquare.color}">${newSquare.characters}</text></svg>`;
}
else{
    console.log("Error");
}

}
function init() {
    inquirer.prompt(questions).then((data) =>
        createFile('sample.svg', initializeShapes(data))
    )
}
init();