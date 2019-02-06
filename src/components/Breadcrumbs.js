import React from 'react'
// import { useState } from 'react';

import { Breadcrumb } from 'semantic-ui-react'

// const Breadcrumbs = () => 
function Breadcrumbs() {
	return (
    <React.Fragment>
		  <Breadcrumb>
		    <Breadcrumb.Section link>Home</Breadcrumb.Section>
		    <Breadcrumb.Divider icon='right angle' />
		    <Breadcrumb.Section link>Search</Breadcrumb.Section>
		    <Breadcrumb.Divider icon='right angle' />
		    <Breadcrumb.Section active>Hospitals and clinics</Breadcrumb.Section>
		  </Breadcrumb>
		  <style jsx>{`
		  	.ui.breadcrumb .divider,
		  	.ui.breadcrumb a {
		  		color: #2979FF;
		  	}
		  	.ui.breadcrumb .active.section {
		  		color: #999;
		  		font-weight: normal;
		  	}
	  	`}</style>
    </React.Fragment>
	)
}

export default Breadcrumbs