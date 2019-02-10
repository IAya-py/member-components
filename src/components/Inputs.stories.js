import React from 'react';
import { storiesOf } from '@storybook/react';

// import { action } from '@storybook/addon-actions';

import Inputs from '../components/Inputs'

storiesOf('Inputs', module)
	.add('Inputs', () => (
		<Inputs />
		))