import { configure } from '@storybook/react';
// import { withThemes, addThemes } from '@nox/addon-themes/dist';
// import { themes } from './themes';

// addThemes(themes);
// addDecorator(withThemes);

const req = require.context('../src', true, /\.story\.tsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
