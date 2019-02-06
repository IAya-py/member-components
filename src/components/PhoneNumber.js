import React from 'react'
// import { useState } from 'react';

import { Icon } from 'semantic-ui-react'

// const Cards2 = () => 
function PhoneNumber() {
  return (
    <React.Fragment>
        <Icon name='phone volume' />
        <span className="phone-number">
            (02) 888 8999
        </span>

      <style jsx>{`
        .phone-number {
            color: #2F7DFF;
        }
      `}</style>
    </React.Fragment>
  )
}

export default PhoneNumber