export const contributionData = [
  {
    sectionTitle: "Install the GitHub Application",
    sectionDescription:
      "To start contributing, you'll need to first install our GitHub application to enable the necessary integrations and permissions. You can find out more about the GitHub application in the steps below.",
    sectionDetails: [
      {
        title: "Steps to Install:",
        description: [
          "• Navigate to the application page: https://github.com/apps/genesis-contribution-automation [GitHub Application Link]",
          "• Click on the 'Install' button.",
          "• Select your account or organization where you want the application installed.",
          "• Grant the necessary permissions as prompted.",
          "* We recommend you only grant access to selected repositories over all repositories.",
        ],
      },
    ],
  },
  {
    sectionTitle: "Add Your Contribution",
    sectionDescription:
      "In order to contribution to the CC-DC-Hub, we will require that you create a hub.md file in your repository to submit your contribution. This file will contain all the necessary information about your contribution. You can find a copy of the hub.md template below.",
    sectionDetails: [
      {
        title: "Steps to Add:",
        description: [
          "• Navigate to your repository.",
          "• Create a new branch in your repository. Alternatively, you can also work off of the main branch.",
          "• In your branch, create a new file named hub.md.",
          "• Fill out the hub.md with the required content structure: https://github.com/adobe/cc-dc-hub/blob/main/public/templates/hub.md [Hub.md Template].",
          "• Commit your changes with a descriptive commit message.",
          "• Create a pull request to your main repository.",
          "• Merge the changes into your main repository. This will create a pull request into the CC-DC-Hub repository for review.",
          "• Someone from our team will review your submission to validate that it follows our guidelines.",
          "• Once approved, your hub.md file will be merged into the CC-DC-Hub.",
          "• Your contribution will be shown on the next deployment.",
        ],
      },
    ],
  },
  {
    sectionTitle: "Modify Your Contribution",
    sectionDescription:
      "If you need to update your contribution after it has been submitted, you can modify the hub.md file.",
    sectionDetails: [
      {
        title: "Steps to Modify:",
        description: [
          "• Navigate to your repository.",
          "• Create a new branch in your repository. Alternatively, you can also work off of the main branch.",
          "• Make the necessary changes to the hub.md file.",
          "• Commit the changes with a message detailing what was modified.",
          "• Create a pull request to your main repository.",
          "• Merge the changes into your main repository. This will create a pull request into the CC-DC-Hub repository for modification.",
          "• Someone from our team will review your submission to validate that it follows our guidelines.",
          "• Once approved, your hub.md file will be merged into the CC-DC-Hub.",
          "• Your modified contribution will be shown on the next deployment.",
        ],
      },
    ],
  },
  {
    sectionTitle: "Delete Your Contribution",
    sectionDescription:
      "If you wish to remove your contribution, you can do so by deleting the hub.md in your repository. If you decided to completely delete your repository, this will trigger a deletion pull request in the CC-DC-Hub repository.",
    sectionDetails: [
      {
        title: "Steps to Delete:",
        description: [
          "• Navigate to your fork of the repository.",
          "• Create a new branch in your repository. Alternatively, you can also work off of the main branch.",
          "• Delete the hub.md file.",
          "• Commit the deletion with a descriptive message.",
          "• Create a pull request to your main repository.",
          "• Merge the changes into your main repository. This will create a pull request into the CC-DC-Hub repository for deletion.",
          "• Someone from our team will review your submission.",
          "• Once approved, your hub.md file will be deleted from the CC-DC-Hub.",
          "• Your modified contribution will be shown on the next deployment.",
        ],
      },
    ],
  },
];
