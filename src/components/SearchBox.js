import React from 'react'
// import { useState } from 'react';

import { Button, Divider, Input, Segment } from 'semantic-ui-react'

// const Buttons = () => 
function SearchBox() {
  return (
    <React.Fragment>
      <Input
        action={{ color: 'blue', content: 'Search' }}
        icon='search'
        iconPosition='left'
        placeholder='Search for doctors, hospitals'
      />

      <style jsx>{`
      `}</style>
    </React.Fragment>
  )
}

export default SearchBox