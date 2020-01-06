import { configure } from '@storybook/react';
import '../scss/main.scss';

const req = require.context('../', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}
configure(loadStories, module);
