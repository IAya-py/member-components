import React from 'react';
import { storiesOf } from '@storybook/react';

// import { action } from '@storybook/addon-actions';

import Buttons from '../components/Buttons'

storiesOf('Buttons', module)
	.add('Buttons', () => (
		<Buttons />
		))