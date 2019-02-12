import React from "react";
// import { useState } from 'react';
import { Card } from "semantic-ui-react";

export default function Notification() {
  return (
    <Card>
      <Card.Content>
        <div className="notificationTop">
          <div className="notificationTopic">
            Request to edit profile has been approved
          </div>
          <div className="notificationTime">23 min ago</div>
        </div>

        <div className="notificationBody">
          Your request to update personal information has been appoved
        </div>
      </Card.Content>
    </Card>
  );
}
