import React, { useState } from 'react'
import { Input, Segment } from 'semantic-ui-react'

function Inputs() {
	const [showPassword, toggleShowPassword] = useState(false);

  return (
  	<React.Fragment>
  		{/*icon - lock*/}
	  	<Input 
	  		icon='lock' 
	  		iconPosition='right' 
	  		id="myInput" 
	  		type={showPassword ? 'text' : 'password'} 
	  		placeholder='Password' 
  		/>
  		<div class="show-password">
		  	<a 
		  		href="javascript::void"
		  		onClick={() => toggleShowPassword(!showPassword)}
		  		>
		  		{showPassword ? 'Hide' : 'Show'} Password
	  		</a>
  		</div>	  	

		  <style jsx>{`
		  	.ui.input {
		  		width: 100%;
		  		margin-bottom: 10px;
		  	}
		  	.show-password {
		  		text-align: right;
		  	}
		  	.show-password a {
		  		color: #3983FF;
		  	}
	  	`}</style>
	  </React.Fragment>
  )
}

export default Inputs