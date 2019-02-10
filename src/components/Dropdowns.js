import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

// TODO: This is missing functionality for sub-menu here from SUI core examples.
// The "Publish To Web" item should contain a sub-menu.

const Dropdowns = () => (
  <Menu>
    <Menu.Menu position='right'>
      <Dropdown text='' icon='user circle outline' position='right'>
        <Dropdown.Menu direction='left'>
          <Dropdown.Item text='Profile' />
          <Dropdown.Divider />
          <Dropdown.Item text='Account Settings' />
          <Dropdown.Divider />
          <Dropdown.Item text='Bank KYC Information' />
          <Dropdown.Divider />
          <Dropdown.Item text='My Transactions' />
          <Dropdown.Divider />
          <Dropdown.Item text='Logout' />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
    <style jsx>{`
      .right.menu i {
          margin-top: 10px;
          margin-right: 10px;
      }
    `}</style>
  </Menu>
)

export default Dropdowns