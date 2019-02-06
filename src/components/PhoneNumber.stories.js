import React from 'react';
import { storiesOf } from '@storybook/react';

// import { action } from '@storybook/addon-actions';

import PhoneNumber from '../components/PhoneNumber'

storiesOf('PhoneNumber', module)
	.add('PhoneNumber', () => (
		<PhoneNumber />
		))