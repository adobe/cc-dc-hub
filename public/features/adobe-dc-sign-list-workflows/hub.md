---
title: Adobe Sign List Workflows
tagline: Obtain a list of all the custom workflows in your Acrobat Sign account
version: 3.0.0
creator: Chris Hughes
contributors: 
    -
keyFeature:
  - 
    title: List All Workflows
    icon: 
    desc: Keep track of all the custom workflows that exist throughout your Acrobat Sign account
  - 
    title: Supports Sandbox Account
    icon: 
    desc: Use the optional-sandbox switch to use with Sandbox account
  - 
    title: Concise Output Format
    icon: 
    desc: Output is intentionally concise to easily support directing to a CSV file for further analysis
docs: 
products: 
  - Sign
---


## Key Features

### List All Templates
Keep track of all the templates that exist throughout your Acrobat Sign account

### Supports Sandbox Account
Use the optional --sandbox switch to use with Sandbox account

### Concise Output Format
Output is intentionally concise to easily support directing to a CSV file for further analysis

## Using Acrobat Sign List Workflows

Java-based command-line tool to list all the custom workflows in an Acrobat Sign account (in CSV format)

![Example Usage](https://github.com/dc/sign-list-workflows/images/example-usage.png)

## Installing Acrobat Sign List Workflows

**Set-Up instructions:**
- Download Java 1.8, if you don't already have it installed on your machine
- Add IP addresses to your allow list, if needed

_As the tool makes use of the Acrobat Sign REST API, it is necessary to provide an integration key for your account_

## Usage

Execute the following command, replacing
- &lt;version&gt; with the appropriate value for the release, such as 3.0.0
- &lt;integrationKey&gt; with your integration key
- [--sandbox] optional flag if the integration key is for a Sandbox account

```bash
java -jar dc-sign-list-webforms-&lt;version&gt;.jar &lt;integrationKey&gt; [--sandbox]
```
<a href="https://github.com/adobe/dc-sign-list-templates">Click Here To Go To Repo</a>

## Have Questions? 

**Contact Your Customer Success Manager For More Information!**
