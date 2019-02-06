import React from 'react'
// import { useState } from 'react';

import { Rating } from 'semantic-ui-react'

// const Cards2 = () => 
function Ratings() {
  return (
    <div className="ratings">
      <Rating icon='star' defaultRating={4} maxRating={5} />
      <span className="rated-number">(25)</span>

      <style jsx>{`
        /* ratings */
        .ratings {
          color: #cccccc;
        }
        .ratings .rated-number {
          margin-left: 4px;
        }
        .ui.star.rating .active.icon {
            color: #F8C674 !important;
            text-shadow: none !important;
        }

        .ui.star.rating .icon {
            width: 16px;
            font-family: outline-icons;
            color: #ccc;
            text-align: right;
        }

        .ui.star.rating .active.icon {
            font-family: Rating;
        }
        .ui.star.rating .icon:hover {
            font-family: Rating;
        }
      `}</style>
    </div>
  )
}

export default Ratings