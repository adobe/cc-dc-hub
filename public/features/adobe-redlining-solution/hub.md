---
title: Readlining Solution
tagline: Allows for workflows to be triggered within Acrobat Sign to initiate document redlining for contract negotiations
version: 1.0
creator: Yashar Avram
contributors: 
    - 
keyFeature:
  - 
docs: ""
products: 
  - Sign
---

## Using Redlining Solution
Navigate to [https://make.powerautomate.com/solutions](https://make.powerautomate.com/solutions) and select `Import Solution`

![Step 1](./image1.png)
![Step 2](./image2.png)

Select the DocumentRedlining zip file
Select each connection required. If there you don't have a configured connection you may be required to set it up before proceeding to the next step.

![Step 3](./image3.png)

If you don't have PDF Services API setup navigate to [https://www.adobe.com/go/powerautomate_getstarted](https://www.adobe.com/go/powerautomate_getstarted) to create the required DC API credentials for the Document Generation step.

![Step 4](./image4.png)
![Step 5](./image5.png)

In SharePoint Create a folder called `Redlining` or something similar. Open the folder and Create another folder used to store the documents you are redlining called `Redlining Files` then upload the NDA Template in the same location.

![Step 6](./image6.png)

Navigate to your SharePoint site and locate the path for your new folders and template file. Input these into the corresponding environment variables.

![Step 7](./image7.png)

The import may take a few minutes. Once imported open the PowerAutomate Flow

![Step 8](./image8.png)

Navigate to `Create sharing link for a file or folder` and select your library name and save

![Step 9](./image9.png)

Now test flow by logging into Acrobat Sign and selecting the Power Automate Workflow
Start from Library > Power Automate > select `Document Redlining` > Click Start

![Step 10](./image10.png)

Enter all required fields and click `Run Flow`

![Step 11](./image11.png)


## Installing Readlining Solution

To download the Solution export file please use the link below:
[Download Export File](https://acrobat.adobe.com/id/urn:aaid:sc:US:4ac3bd38-4e3a-4c94-8f64-f1a6d09d583b)

You will also need the NDA tempalte file. Please use the link below to download the file:
[Download NDA Template](https://acrobat.adobe.com/id/urn:aaid:sc:US:52c4d1ac-ee64-45f0-af29-70e6a1c67224)