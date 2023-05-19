//const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "f817jh",
  projectId: "mtg83j",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //on('file:preprocessor', cucumber());
    },
    //specPattern:"cypress/e2e/*.feature",
  },
});