import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

// TODO: This is missing functionality for sub-menu here from SUI core examples.
// The "Publish To Web" item should contain a sub-menu.

const Dropdowns = () => (
  <Menu>
    <Menu.Menu position='right'>
      <Dropdown text='' icon='user circle outline' position='right'>
        <Dropdown.Menu direction='left'>
          <Dropdown.Item text='New' />
          <Dropdown.Divider />
          <Dropdown.Item text='Download As...' />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  </Menu>
)

export default Dropdowns