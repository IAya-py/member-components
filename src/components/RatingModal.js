import React, { useState } from "react";
import { Button, Modal } from "semantic-ui-react";
import Ratings from "react-ratings-declarative";

function RatingModal() {
  return (
    <React.Fragment>
      <Modal
        className="ratingModal"
        style={{
          borderRadius: 20,
          paddingTop: 20,

          marginRight: 10
        }}
        open={true}
        size="mini"
      >
        <div className="ratingModalInfo">
          <div>Member Gateway Logo</div>
          <div>Enjoying Memberlink ?</div>
          <div>Rate this app</div>
          <Ratings widgetRatedColors="blue">
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
          </Ratings>
        </div>
        <Button.Group
          style={{ marginTop: 20 }}
          basic
          className="ratingButtonGroup"
        >
          <Button style={{ padding: 25 }}>Not now</Button>
          <Button style={{ padding: 25 }}>Submit</Button>
        </Button.Group>
      </Modal>
      <style jsx>{`
        .ratingModal {
          overflow: hidden;
          display: flex;
        }

        .ratingModalInfo {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .ratingButtonGroup {
          width: 100%;
          overflow: hidden;
        }

        .ratingButton {
          color: #;
        }
      `}</style>
    </React.Fragment>
  );
}

export default RatingModal;
