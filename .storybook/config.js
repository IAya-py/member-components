// TODO: variable like $color_primary

import React from 'react';
import { configure, addDecorator } from '@storybook/react';

// css
import 'semantic-ui-css/semantic.min.css'
import '../src/components/css/global.css'

addDecorator(story => <div style={{ textAlign: 'left', padding: '20px' }}>{story()}</div>)

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
	// loading one by one
  require('../src/components/Breadcrumbs.stories.js');
  require('../src/components/Buttons.stories.js');
  require('../src/components/Headers.stories.js');
  require('../src/components/SearchBox.stories.js');
  require('../src/components/Ratings.stories.js');
  require('../src/components/PhoneNumber.stories.js');
  require('../src/components/Cards.stories.js');
  require('../src/components/Sidebars.stories.js');
  require('../src/components/Dropdowns.stories.js');
  require('../src/components/Form.stories.js');
  require('../src/components/Inputs.stories.js');
  require('../src/components/Lists.stories.js');
  require('../src/components/Checkboxes.stories.js');

  // loading stories dynamically
  // req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);