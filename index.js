const inquirer = require('inquirer')
const fs = require('fs')


function menu() {
        inquirer
    .prompt([{
        type: 'list',
        name: 'menuOptions',
        message: 'What do you want to do next?',
        choices:["add an engineer", "add an intern", "finish building team"]
    }])
    .then(input => {
        console.log(input.menuOptions)
        if (input.menuOptions === "add an engineer") {
            engineer()
        }else if (input.menuOptions === "add an intern") {
            intern()
        }else {
            finishTeam()
        }
    })
}

function manager(){
    inquirer
    .prompt([{
            type: 'input',
            name: 'managerName',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is your Id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'managerOfficeNum',
            message: 'What is your office number',
        },
    ])

    .then(input => {
        console.log(input.managerName)
    })
}

//end of manager, beginning of engineer
function engineer(){


inquirer
    .prompt([{
            type: 'input',
            name: 'engineer',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is your id?',
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is your github username?',
        }
    ])
    .then(input => {
        console.log(input.managerName)
    })
}
// end of engineer, beginning of intern
function intern(){
inquirer
    .prompt([{
            type: 'input',
            name: 'intern',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is your id?',
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What school do you go to?',
        },

    ])

    .then(input => {
        console.log(input.managerName)
    })
}
function finishTeam(){
    console.log("team is finished")
}
//   .then((data) => {
//     const filename = `${data.name.index.html().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });

//   // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(
//         fileName, data, (err) =>
//         err ? console.log(err) : console.log('Success!')
//     );
// }