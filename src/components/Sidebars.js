import React, { Component } from 'react'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

import SearchBox4 from './SearchBox4'

export default class Sidebars extends Component {
  state = { visible: false }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (
      <div>
        <Button basic className="shadow-none" disabled={visible} onClick={this.handleShowClick}>
          <Icon name='sidebar' fitted />
        </Button>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='large'
          >
            <Menu.Item as='a'>
              <SearchBox4 />
            </Menu.Item>
            <Menu.Item as='a'>
              Request LOA Consult
            </Menu.Item>
            <Menu.Item className="border-bottom" as='a'>
              Request LOA Lab
            </Menu.Item>
            <Menu.Item as='a'>
              Help
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h1'>Recently visited hospitals and clinics</Header>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Segment>
          </Sidebar.Pusher>


        <style jsx>{`
          .ui.icon.menu .item {
            text-align: left;
          }

          .ui.vertical.menu .item:before {
              opacity: 0;
          }

          .ui.vertical.menu .item.border-bottom:before {
              opacity: 1;
          }
        `}</style>
        </Sidebar.Pushable>
      </div>
    )
  }
}