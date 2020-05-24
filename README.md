# Node Microservice Template

### Description:
This project provides a NodeJS microservice template

### Features
* Express routing broken down by endpoint and versioned appropriately
* Dependency injection of middleware and clients in a modular way to facilitate separation of concerns and unit testing
* Hosting a swagger ui from a localy versioned swagger spec
* Unit testing for service business logic with Mocha

### Local Usage
1. Clean, build, test and run the Node Docker container in watch mode via ` mk `, which will interactively detect and reload changes to the source code **./src**
2. Test the microservice locally with the curl client script templte ` ./curl_client.sh `
