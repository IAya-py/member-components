import React from 'react'
import { List } from 'semantic-ui-react'

// const Lists = () => 
function Lists() {
  return (
    <List>
      <List.Item>
        {/* check | close */}
        <List.Icon name='check' />
        <List.Content>Password Strength: Weak</List.Content>
      </List.Item>

      <List.Item className='wrong'>
        {/* check | close */}
        <List.Icon name='close' />
        <List.Content>Cannot contain your name or email address</List.Content>
      </List.Item>

      <style jsx>{`
        /*.ui.list .list>.item, 
        ol.ui.list li, 
        ul.ui.list li,*/
        .ui.list>.item {
          color: #72A4E3;
        }
        .ui.list>.item.wrong {
          color: #F9BC72;
        }

        /*.ui.list .list>.item>i.icon,*/
        .ui.list>.item>i.icon {
          color: #4288FF;
        }
        .ui.list>.item.wrong>i.icon {
          color: #F7941D;
        }
      `}</style>
    </List>
  )
}

export default Lists