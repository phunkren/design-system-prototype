module.exports = {
  stories: [
    '../src/stories/**/*.stories.mdx',
    '../src/stories/**/*.stories.@(ts|tsx|js|jsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-addon-designs',
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  refs: (_, { configType }) => {
    if (configType === 'DEVELOPMENT') {
      return {
        projectA: {
          title: 'Project A (local)',
          url: 'http://localhost:7007',
        },
        projectB: {
          title: 'Project B (local)',
          url: 'http://localhost:8008',
        },
      };
    }

    return {
      projectA: {
        title: 'Project A (prod)',
        url: 'https://ds-project-a.netlify.app/',
      },
      projectB: {
        title: 'Project B (prod)',
        url: 'https://ds-project-b.netlify.app/',
      },
    };
  },
};
