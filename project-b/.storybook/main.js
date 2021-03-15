module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  refs: (config) => {
    //👇 Retrieves the current environment from the config object
    const { configType } = config || {}; 
    
    console.log('b', { configType, config});

    if (configType === 'DEVELOPMENT') {
      return {
        ui: {
          title: 'UI Library (local)',
          url: 'http://localhost:6006',
        },
      };
    }
    return {
      ui: {
        title: 'UI Library (prod)',
        url: 'https://ds-ui-lib.netlify.app/',
      },
    };
  },
}