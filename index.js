
const fs = require("fs");
const inquirer= require('inquirer');
const markdownfile =require("./utility/createMarkDownfile");

  
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is the title of the project?',
    },

    {
        type: 'input',
        name: 'projectDesc',
        message: 'What is the description of the project?',
    },

    {
        type: 'input',
        name: 'InstallationDetails',
        message: 'What is the installation methods for the project?',
    },

    {
        type: 'input',
        name: 'usageDetails',
        message: 'What is the usage for the project?',
    },

    
    {
      type: 'list',
      message: 'What are the License options available for the project?',
      name: 'License',
      choices: ['Project Server 2019', 'Project Server CAL 2019', 'Project Professional 2019', 'Project Standard 2019'],
    },

    {
        type: 'input',
        name: 'Contributing',
        message: 'How can developers contribute to this project?',
    },

    {
        type: 'input',
        name: 'Tests',
        message: 'What are the tests for this project?',
    },

    {
        type: 'input',
        name: 'Username',
        message: 'What is your Github Username?',
    },

    {
      type: 'input',
      name: 'Email',
      message: 'What is your Email?',
    },
])
.then((data) => {
 // const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
const filename = "readME.md"
  fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    err ? console.log(err) : console.log('Success!')
  );
});
 
  