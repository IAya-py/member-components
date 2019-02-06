import React from 'react';
import { storiesOf } from '@storybook/react';

// import { action } from '@storybook/addon-actions';

import Sidebars from './Sidebars'

storiesOf('Sidebars', module)
	.add('Sidebars', () => (
		<Sidebars />
		))