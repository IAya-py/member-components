import React from 'react';
import { storiesOf } from '@storybook/react';

// import { action } from '@storybook/addon-actions';

import Dropdowns from './Dropdowns'

storiesOf('Dropdowns', module)
	.add('Dropdowns', () => (
		<Dropdowns />
		))