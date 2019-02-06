import React from 'react';
import { storiesOf } from '@storybook/react';

// import { action } from '@storybook/addon-actions';

import Breadcrumbs from '../components/Breadcrumbs'

storiesOf('Breadcrumbs', module)
	.add('Breadcrumbs', () => (
		<Breadcrumbs />
		))