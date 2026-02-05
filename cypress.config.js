const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 800,
    defaultCommandTimeout: 15000,
    chromeWebSecurity: false,
    video: false,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    allowCypressEnv: false,
    experimentalModifyObstructiveThirdPartyCode: true,

    setupNodeEvents(on, config) {
      const environmentName = config.env.environmentName || 'qa';
      const environmentFilename = `./${environmentName}.settings.json`;
      console.log('loading %s', environmentFilename);
      const settings = require(environmentFilename);
      if (settings.baseUrl) {
        config.baseUrl = settings.baseUrl;
      }
      if (settings.env) {
        config.env = {
          ...config.env,
          ...settings.env,
        };
      }
      console.log('loaded settings for environment %s', environmentName);
      return config;
    },
  },
});
