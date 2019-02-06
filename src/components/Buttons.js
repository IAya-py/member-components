import React from 'react'
// import { useState } from 'react';

import { Button } from 'semantic-ui-react'

// const Buttons = () => 
function Buttons() {
  return (
    <React.Fragment>
      <Button basic color='blue'>
        Explore More Hospitals
      </Button>

      <style jsx>{`
        /* bordered button */
        .ui.button, .ui.buttons .button, .ui.buttons .or {
          font-size: 1.2rem;
        }
        .ui.basic.button, 
        .ui.basic.buttons .button {
          border-radius: 2px;
            font-weight: bold;
            width: 100%;
        }
        .ui.basic.blue.button, 
        .ui.basic.blue.buttons .button,
        .ui.basic.blue.button:hover, 
        .ui.basic.blue.buttons .button:hover {
            box-shadow: 0 0 0 2px #2979FF inset!important;
            color: #2979FF!important;
        }
      `}</style>
    </React.Fragment>
  )
}

export default Buttons