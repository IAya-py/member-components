import React from 'react'
// import { useState } from 'react';

import { Button, Divider, Input, Icon } from 'semantic-ui-react'

// const Buttons = () => 
// map marker alternate
function SearchBox() {
  return (
    <div className="clearfix">

      <div className="searchbox-with-location float-left">
        <Input
          icon='search'
          iconPosition='right'
          placeholder='Search...'
        />

        <Button 
          basic 
          color='white'
        >
          <Icon fitted color='blue' name='map marker alternate' />
        </Button>
      </div>

      <Button icon color='blue' className="float-right">
        <Icon name='sidebar' />
      </Button>

      <style jsx>{`
        .searchbox-with-location .ui.input>input {
          border-bottom-right-radius: 0;
          border-top-right-radius: 0;
          /*border-right: 0;*/
        }

        .searchbox-with-location .ui.basic.button, 
        .searchbox-with-location .ui.basic.buttons .button {
            border-bottom-left-radius: 0;
            border-top-left-radius: 0;
            line-height: 1.21428571em;
            height: 38px;
            margin-right: 0;
        }

        .searchbox-with-location .ui.input {
            float: left;
        }
      `}</style>
    </div>
  )
}

export default SearchBox