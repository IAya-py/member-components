import React from 'react'
// import { useState } from 'react';

import { Input, Button, Icon } from 'semantic-ui-react'

// const Buttons = () => 
function SearchBox4() {
  return (
    <div class="clearfix">
      <div class="float-left">
        <Input 
          icon='search' 
          iconPosition='left'
          placeholder='Search...' 
        />
      </div>

      <style jsx>{`
        .ui.input>input {
            border-radius: 0;
            border: 0;
            border-bottom: 1px solid rgba(34,36,38,.15);
        }

        .ui[class*="left icon"].input>input {
            padding-left: 25px !important;
        }

        .ui.icon.input>i.icon {
            text-align: left;
            width: 25px;
        }

        .ui.icon.input>i.icon:after, .ui.icon.input>i.icon:before {
            text-align: left;
        }
      `}</style>
    </div>
  )
}

export default SearchBox4