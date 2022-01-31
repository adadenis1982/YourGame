import React from 'react';
import { Card } from 'react-bootstrap';

function ProfilePoint({ el }) {

  return (
     <Card.Text>Время: {el.createdAt} Очки: {el.points} </Card.Text>
  );
}

export default ProfilePoint;
