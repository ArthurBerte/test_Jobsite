import {allureCypress} from "allure-cypress/reporter";
import { defineConfig } from "cypress";


export default defineConfig({
  e2e: {
    setupNodeEvents: function (on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
    },
    baseUrl: "https://magento.softwaretestingboard.com",
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
  }

});