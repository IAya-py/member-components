import React from 'react';
import { storiesOf } from '@storybook/react';

// import { action } from '@storybook/addon-actions';

import Ratings from '../components/Ratings'

storiesOf('Ratings', module)
	.add('Ratings', () => (
		<Ratings />
		))