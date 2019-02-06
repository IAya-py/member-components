import React from 'react'
// import { useState } from 'react';

import { Button } from 'semantic-ui-react'

// const ButtonExampleGroupEqualWidth = () => 
function Buttons2() {
  return (
    <div>
      <Button basic>All Specialization</Button>
      <Button basic>All Schedule</Button>
      <Button basic>All Location</Button>

      <style jsx>{`
        /* buttons2 */
        .ui.basic.button, .ui.basic.buttons .button {
            border-radius: 15px;
            margin-right: 10px;
            padding: 8px 20px;
        }
        .ui.basic.button, .ui.basic.buttons .button,
        .ui.basic.button:hover, .ui.basic.buttons .button:hover {
            box-shadow: 0 0 0 1px #9ab3cd;
            color: #B7C9DB !important;
        }
      `}</style>
    </div>
  )  
}

export default Buttons2