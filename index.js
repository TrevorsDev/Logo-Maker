const { Circle, Square, Triangle } = require('./lib/shapes');


const inquirer = require('inquirer');
const SVG = require('./lib/svg.js');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'shapeColor',
        message: "What color do you want your shape to be?",
        default: 'orange'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape do you want?',
        choices: ['Square', 'Triangle', 'Circle']
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color do you want the text to be?',
        default: 'black',
    },
    {
        type: 'input',
        name: 'text',
        message: 'Add text to your logo!',
        default: 'SVG',
    },
];

inquirer.prompt(questions).then(answers => {
    let shape;
    if (answers.shape === 'Square') {
        shape = new Square();
    } else if (answers.shape === 'Triangle') {
        shape = new Triangle();
    } else if (answers.shape === 'Circle') {
        shape = new Circle();
    } else {
        console.log('Please select a shape');
    }

    const newSvg = new SVG()

    newSvg.setText(answers.text, answers.textColor);
    shape.setColor(answers.shapeColor);

    newSvg.setShape(shape);
})

