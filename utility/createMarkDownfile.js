function createMarkDownfile(data){
return `
# ${data.projectTitle}

## Table of Contents
*[Description](#Description)
*[Installation](#Installation)
*[Usage](#Usage)
*[License](#License)
*[Contribution](#Contribution)
*[questions](#questions)

## Description
${data.projectDesc}

## Installation Instructions
${data.InstallationDetails}

##Usage Information
${data.usageDetails}

## License
${data.License}

## Contributors
${data.Contributing}

## questions
Contact Me:
Github:[https://github.com/${data.Username}](https://github.com/${data.Username})
Email: [${data.Email}](${data.Email})
`;

}

export default createMarkDownfile;