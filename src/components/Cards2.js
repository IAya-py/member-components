import React from 'react'
// import { useState } from 'react';

import { Card, Button, Image, Icon } from 'semantic-ui-react'

import Ratings from './Ratings'
import PhoneNumber from './PhoneNumber'

const imageFile = '/images/image.png'

// const Cards2 = () => 
function Cards2() {
  return (
    <React.Fragment>

      <Card.Group>
        <Card>
          <Image src={imageFile} size='tiny' floated='left' />

          <Card.Content>
            <Card.Header>Paulo Manlapid</Card.Header>
            <Card.Meta><span>Cardiology</span>, Makati Medical Center</Card.Meta>
            <p>Schedule: 9am - 5pm</p>
            <Card.Description>
                <PhoneNumber />
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

        /* card with image */
        .ui.cards>.card {
            display: block;
        }

        .ui.card>.content, 
        .ui.cards>.card>.content {
            margin-left: 72px;
            line-height: 26px;
        }

        .ui.floated.image, .ui.floated.images {
            margin-left: 1em;
            margin-top: 1em;
        }

        .ui.tiny.image, 
        .ui.tiny.images .image, 
        .ui.tiny.images img, 
        .ui.tiny.images svg {
            width: 60px;
            height: 60px;
        }

        .ui.card>.image, 
        .ui.cards>.card>.image {
            border-radius: 50% !important;
            object-fit: cover;
        }

        .ui.card>.content p, 
        .ui.cards>.card>.content p,
        .ui.card .meta, .ui.cards>.card .meta {
            color: rgba(0,0,0,.5);
        }
        .ui.card .meta span, .ui.cards>.card .meta span {
            color: #000000;
        }
        .ui.card>.content p, 
        .ui.cards>.card>.content p {
            margin-bottom: 0;
        }
        .ui.card>.content>.description, 
        .ui.cards>.card>.content>.description {
            clear: none;
        }
      `}</style>
    </React.Fragment>
  )
}

export default Cards2