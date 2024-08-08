export const contributionData = [
  {
    sectionTitle: 'Use Our Predefine Template',
      sectionDescription: '',
    sectionDetails: [
      { 
        title: 'Clone Your Project:', 
        description: 'Once your project is cloned, navigate to the directory public/data/tools.' 
      },
      { 
        title: 'Locate the Template Folder:', 
        description: 'Inside the tools folder, you will find a directory named template.' 
      },
      { 
        title: 'Duplicate the Template:', 
        description: 'Make a duplicate of the template folder and rename it to match your project name.' 
      },
      { 
        title: 'Organize Images:', 
        description: 'Place all the relevant images inside the image folder within your newly created project folder.' 
      },
      { 
        title: 'Fill out Content Template:', 
        description: 'Open the file named contentTemplate.json and fill in the details corresponding to your project.' 
      }
    ]
  },
  {
    sectionTitle: 'Update The ContentTemplate.json File',
    sectionDescription: '',
    sectionDetails: [
      { 
        title: 'Title:', 
        description: 'The name of your project. This will be displayed on the the features page about your project.' 
      },
      { 
        title: 'Tagline:', 
        description: 'A short description of your project. This will be displayed on the search page.' 
      },
      { 
        title: 'Version:', 
        description: 'The current version of your project.' 
      },
      { 
        title: 'Creator:', 
        description: 'The name of the creator of the project.' 
      },
      { 
        title: 'Key Features:', 
        description: 'Three key features you would like to highlight about your project.' 
      },
      { 
        title: 'Content:', 
        description: 'A detailed description of your project. This is where you can format how your content will be displayed. Currently only three types of formatting are supported (text, images, and links).' 
      },
      { 
        title: 'Text:', 
        description: 'To add text, simply type your text in the content field.' 
      },
      { 
        title: 'Images:', 
        description: 'To add an image, provide the image name in the content field. The image must be located in the image folder of your project.' 
      },
      { 
        title: 'Links:', 
        description: 'To add a link, provide the link name in the content field.' 
      },
      { 
        title: 'Installation:', 
        description: 'A detailed description of how to install your project. If your project has a GitHub repository associated with it, this is a good area to supply a link to your repo. The structure follows the same concept as the content section. Please review the content section.' 
      }
    ]
  },
  {
    sectionTitle: 'Adding Your Tool',
    sectionDescription: 'Once you\'ve fully filled out the contentTemplate.json and supplied the required images, please navigate to public/data/pages and open the searchToolsContent.json file. The structure of this page will be explained below:',
    sectionDetails: [
      { 
        title: 'id:', 
        description: 'This is the name of your project. This must match the name of your project folder.' 
      },
      { 
        title: 'title:', 
        description: 'The title of the page. This will be displayed on the search page.' 
      },
      { 
        title: 'desc:', 
        description: 'A short description of your project. This will be displayed on the search page.' 
      },
      { 
        title: 'featureType:', 
        description: 'There\'s three options to choose from: "integration", "tool", and "sample". This will determine and categorize your submission.' 
      },
      { 
        title: 'productType:', 
        description: 'There\'s two option to choose from: "Sign" or "Acrobat". This will display an icon on the search page, so other users can easily identify the product your project is associated with your submission.' 
      },
      { 
        title: 'adobeCertified:', 
        description: 'There\'s two option to choose from: "true" or "false".Is this an Adobe certified project?' 
      },
      { 
        title: 'featureFileName:', 
        description: 'This will be the same as the id.' 
      }
    ]
  },
  {
    sectionTitle: 'Create A Pull Request',
    sectionDescription: 'Once you\'ve fully added your submission, please commit and push to the repo and make a pull request. One of your team memebers will review your submission as needed.',
  },
  {
    sectionTitle: 'Not Familiar With Github?',
    sectionDescription: 'If you\'re not familiar with using GitHub, please use this link to submit your project.',
  },
];
