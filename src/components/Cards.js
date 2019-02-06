import React from 'react'
// import { useState } from 'react';

import { Card, Button, Image, Rating, Icon } from 'semantic-ui-react'
import Ratings from './Ratings'

// const Cards = () => 
function Cards() {
  return (
    <React.Fragment>

      <Card.Group>
        <Card>
          <Card.Content>
            <Card.Header>Primary Care Center Makati Medical</Card.Header>
            <Card.Meta>2 Amorsolo Streen, Legazpi Village Makati</Card.Meta>
            <Card.Description>(02) 888 8999</Card.Description>
            
            <div className="card-extra">
              <Ratings />

              <div className="directions">
                <Icon bordered inverted color='blue' name='level down alternate' />
                Get Direction, 0.65km away
              </div>
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

        /* directions */
        .directions {
            color: #4FA0FF;
            font-size: 11px;
        }

        .directions i {
            transform: rotate(45deg);
        }

        .directions i::before {
            transform: rotate(-135deg);
            display: inline-block;
        }

        .directions i.icon, .directions  i.icons {
            font-size: 10px;
            padding: 2px !important;
            width: 1.5em;
            height: 1.5em;
            margin-right: 10px;
        }
      `}</style>
    </React.Fragment>
  )
}

export default Cards