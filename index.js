const inquirer = require('inquirer');
const fs = require('fs');

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
        name: 'questions',
        message: 'Do you have any additional questions?',
    },


  ])
  .then((data) => {
   // const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
const filename = "readME.md"
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
