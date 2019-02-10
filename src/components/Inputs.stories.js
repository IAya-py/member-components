import React from 'react';
import { storiesOf } from '@storybook/react';

// import { action } from '@storybook/addon-actions';

import Inputs from '../components/Inputs'
import Inputs2 from '../components/Inputs2'

storiesOf('Inputs', module)
	.add('Inputs', () => (
		<Inputs />
		))
	.add('Inputs2', () => (
		<Inputs2 />
		))