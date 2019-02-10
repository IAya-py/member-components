import React from 'react';
import { storiesOf } from '@storybook/react';

// import { action } from '@storybook/addon-actions';

import Checkboxes from './Checkboxes'

storiesOf('Checkboxes', module)
	.add('Checkboxes', () => (
		<Checkboxes />
		))