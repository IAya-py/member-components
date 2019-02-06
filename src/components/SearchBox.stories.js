import React from 'react';
import { storiesOf } from '@storybook/react';

// import { action } from '@storybook/addon-actions';

import SearchBox from '../components/SearchBox'
import SearchBox2 from '../components/SearchBox2'
import SearchBox3 from '../components/SearchBox3'

storiesOf('SearchBox', module)
	.add('SearchBox', () => (
		<SearchBox />
		))
	.add('SearchBox2', () => (
		<SearchBox2 />
		))
	.add('SearchBox3', () => (
		<SearchBox3 />
		))