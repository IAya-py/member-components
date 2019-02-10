import React from 'react';
import { storiesOf } from '@storybook/react';

// import { action } from '@storybook/addon-actions';

import FormDate from './FormDate'

storiesOf('Form', module)
	.add('FormDate', () => (
		<FormDate />
		))