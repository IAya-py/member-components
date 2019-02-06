import React from 'react'
// import { useState } from 'react';

import { Button } from 'semantic-ui-react'

// const ButtonExampleGroupEqualWidth = () => 
function ButtonGroup() {
  return (
    <div>
      <Button.Group basic widths='3'>
        <Button color='blue'>All</Button>
        <Button>Doctors</Button>
        <Button>Hospitals</Button>
      </Button.Group>

      <style jsx>{`
        /* button */
        .ui.basic.button, 
        .ui.basic.buttons .button {
          border-radius: 0px;
        }
        
        .ui.blue.button, 
        .ui.blue.buttons .button,
        .ui.blue.button:hover, 
        .ui.blue.buttons .button:hover,

        .ui.basic.buttons .button.ui.blue {
          background-color: #2979FF !important;
          color: #ffffff !important;
        }
      `}</style>
    </div>
  )  
}

export default ButtonGroup