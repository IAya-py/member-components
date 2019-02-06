import React from 'react';
import { storiesOf } from '@storybook/react';

// import { action } from '@storybook/addon-actions';

import Cards from '../components/Cards'
import Cards2 from '../components/Cards2'

storiesOf('Cards', module)
	.add('Hospitals', () => (
		<Cards />
		))
	.add('Doctors', () => (
		<Cards2 />
		))