import React, { useState } from 'react'
import { Input, Segment } from 'semantic-ui-react'

function Inputs2() {
	const [showPassword, toggleShowPassword] = useState(false);

  return (
  	<React.Fragment>
  		{/*icon - lock*/}
	  	<Input 
	  		label={{ 
	  			basic: true,
	  			content: showPassword ? 'Hide' : 'Show',
	  			onClick: () => toggleShowPassword(!showPassword)
	  		}} 
	  		labelPosition='right' 
	  		id="myInput" 
	  		type={showPassword ? 'text' : 'password'} 
	  		placeholder='Password' 
  		/>	  	

		  <style jsx>{`
		  	.ui.input {
		  		width: 100%;
		  	}
		  	.ui.basic.label {
		  		color: #5B9BE5;
		  		cursor: pointer;
		  		border-left: 0;
		  		transition: background 0s ease;
		  	}
		  	.ui.label {
				    background: transparent;
				}
				.ui[class*="right labeled"].input>input {
				    border-right: 0;    
				}
				.ui[class*="right labeled"].input>input:focus {
				    border-right-color: transparent !important;
				}
				.ui[class*="right labeled"].input>input:focus + .ui.basic.label {
				    border-color: #2979FF;
				}
	  	`}</style>
	  </React.Fragment>
  )
}

export default Inputs2