import React from 'react'
// import { useState } from 'react';

import { Input, Button, Icon } from 'semantic-ui-react'

// const Buttons = () => 
function SearchBox2() {
  return (
    <div class="clearfix">
      <div class="float-left">
        <Input icon='search' placeholder='Search...' />
      </div>

      <Button icon color='blue' className="float-right">
        <Icon name='sidebar' />
      </Button>

      <style jsx>{`

      `}</style>
    </div>
  )
}

export default SearchBox2