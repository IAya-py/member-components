import React from 'react'
// import { useState } from 'react';

import { Button } from 'semantic-ui-react'

// const Buttons3 = () => 
function Buttons3() {
  return (
    <React.Fragment>
      <Button color='blue'>
        Verify
      </Button>

      <style jsx>{`
        .ui.button, 
        .ui.buttons .button {
          border-radius: 2px;
          font-weight: bold;
          padding-top: 1em;
          padding-bottom: 1em;
          width: 100%;
        }
      `}</style>
    </React.Fragment>
  )
}

export default Buttons3