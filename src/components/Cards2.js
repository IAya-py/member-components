import React from 'react'
// import { useState } from 'react';

import { Card, Button, Image, Icon } from 'semantic-ui-react'
import Ratings from './Ratings'

// const Cards2 = () => 
function Cards2() {
  return (
    <React.Fragment>

      <Card.Group>
        <Card>
          <Card.Content>
            <Card.Header>Paulo Manlapid</Card.Header>
            <Card.Meta>Cardiology, Makati Medical Center</Card.Meta>
            <Card.Description>
                <Icon name='phone volume' />
                <span className="phone-number">
                    (02) 888 8999
                </span>
            </Card.Description>
            
            <div className="card-extra">
              <Ratings />
            </div>
          </Card.Content>

        </Card>
      </Card.Group>

      <style jsx>{`
        .ui.card .content .card-extra {
            position: absolute;
            right: 10px;
            bottom: 15px;
            text-align: right;
        }
        .phone-number {
            color: #2F7DFF;
        }
      `}</style>
    </React.Fragment>
  )
}

export default Cards2