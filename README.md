# test_Jobsite
This is a repo that I created to comply with a QE test sent to me by Jobsite.

# How to run the project
Follow these steps in order to install and run this automation:
 If you have Node.js installed:
- First, open a prompt and use the command "node --version" to check for the installed version of your node package;
- Second, verify that your NPM package manager is ready to use, with the command "npm --version";
- Now, once you are sure that Node.js is installed and that npm package manager is working properly, in the same prompt, use the command "npm install -g cypress";
- Wait for Cypress to end installing, and then go to the project folder, open a new command prompt and run "npm install package-lock.json"
- Once the project dependencies end installing, in the same prompt, run the command "npm install -g allure" to install Allure reports on your machine;
- As soon as Allure installation ends, run the command "npx cypress run", in order to run the tests in this automated test suite;
- The tests will run, and when they finish, run the command "allure generate allure-results --clean" to generate the report at the end of the run.
- To see the report generated with the previous command, run "allure open allure-report" in order to open your default browser and build the HTML page with the report information.

If you don't have Node.js installed:
- First, go to "https://nodejs.org/en", and click on the "Download" link;
- Now, select the correct OS you are using and follow the instructions on Node page to install Node.js on your machine;
- Once the download has finished, open a command prompt and run the command "node --version" to make sure that node.js was installed;
- Once the node version is shown, in the same prompt, run the command "npm --version" to be sure that npm is ready to use;
- After that, on the same prompt, run the cypress install command: "npm install -g cypress";
- The system will finish installing Cypress, and once it is installed, go to the project folder, open a new prompt and run "npm install package-lock.json";
- Once the project dependencies end installing, in the same prompt, run the command "npm install -g allure" to install Allure reports on your machine;
- As soon as Allure installation ends, run the command "npx cypress run", in order to run the tests in this automated test suite;
- The tests will run, and when they finish, run the command "allure generate allure-results --clean" to generate the report at the end of the run.
- To see the report generated with the previous command, run "allure open allure-report" in order to open your default browser and build the HTML page with the report information.