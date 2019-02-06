import React from 'react';
import { storiesOf } from '@storybook/react';

// import { action } from '@storybook/addon-actions';

import Buttons from '../components/Buttons'
import ButtonGroup from '../components/ButtonGroup'
import Buttons2 from '../components/Buttons2'

storiesOf('Buttons', module)
	.add('Buttons', () => (
		<Buttons />
		))
	.add('ButtonGroup', () => (
		<ButtonGroup />
		))
	.add('Buttons2', () => (
		<Buttons2 />
		))