const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

let allEmployees =[]


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
            message: "What is your manager's name?",
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is their Id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email?',
        },
        {
            type: 'input',
            name: 'managerOfficeNum',
            message: 'What is their office number',
        },
    ])

    .then(input => {
        console.log(input)
        const newManager = new Manager(input.managerName, input.managerId, input.email, input.managerOfficeNum)
        allEmployees.push(newManager)
        menu()
    })
}

//end of manager, beginning of engineer
function engineer(){


inquirer
    .prompt([{
            type: 'input',
            name: 'engineerName',
            message: 'What is the name of your engineer?',
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is their id?',
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is their email?',
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is their github username?',
        }
    ])
    .then(input => {
        console.log(input.managerName)
        const newEngineer = new Engineer(input.engineerName, input.engineerId, input.engineerEmail, input.engineerGithub)
        allEmployees.push(newEngineer)
        menu()
    })
}
// end of engineer, beginning of intern
function intern(){
inquirer
    .prompt([{
            type: 'input',
            name: 'internName',
            message: 'What is the name of your intern?',
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is their id?',
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is their email?',
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What school do they go to?',
        },

    ])

    .then(input => {
        console.log(input.managerName)
        const newIntern = new Intern(input.internName, input.internId, input.internEmail, input.internSchool)
        allEmployees.push(newIntern)
        menu()

    })
}
function finishTeam(){
    console.log("team is finished")
    let htmlString = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    
    </head>
    
    <body class="container d-flex pt-5">
    `;

    for (let employee of allEmployees) {
        if (employee.getRole() === "Manager") {
           htmlString = htmlString.concat(`
        <div class="card p-3 m-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Title: ${employee.getRole()}</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: ${employee.getName()}</li>
                <li class="list-group-item">Id: ${employee.getId()}</li>
                <li class="list-group-item">Email: ${employee.getEmail()}</li>
                <li class="list-group-item">Office Number: ${employee.getOfficeNum()}</li>
            </ul>
        </div>
    </div> `)
        }else if (employee.getRole() === "Engineer") {
            htmlString = htmlString.concat(`
        <div class="card p-3 m-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Title: ${employee.getRole()}</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${employee.getName()}</li>
            <li class="list-group-item">Id: ${employee.getId()}</li>
            <li class="list-group-item">Email: ${employee.getEmail()}</li>
                <li class="list-group-item">Github: <a href="www.github.com/${employee.getGithub}">  ${employee.getGithub()}</a></li>
            </ul>
        </div>
    </div> `)
        }else {
            htmlString = htmlString.concat(`
        <div class="card p-3 m-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Title: ${employee.getRole()}</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${employee.getName()}</li>
            <li class="list-group-item">Id: ${employee.getId()}</li>
            <li class="list-group-item">Email: ${employee.getEmail()}</li>
            <li class="list-group-item">School: ${employee.getSchool()}</li>
            </ul>
        </div>
    </div> `)
        }
        
        
        
    }
    htmlString = htmlString.concat(`
    </body>
<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>

</html>
    `);
   writeHtml(htmlString) 

}
function writeHtml(data){
    fs.writeFileSync(
        "team.html", data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}


manager()
