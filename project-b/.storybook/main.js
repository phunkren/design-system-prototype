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
  refs: (_, { configType }) => {  
    console.log('b', { configType});

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