const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

module.exports = {
  corePlugins: {
    preflight: false
  },
  content: [join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'), ...createGlobPatternsForDependencies(__dirname)],
  darkMode: 'media',
  theme: {
    extend: {}
  },
  plugins: []
};
