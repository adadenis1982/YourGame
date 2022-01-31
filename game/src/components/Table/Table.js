import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios';

export default function Table() {

  //мой код Выведение списка результатов
  const [points, setPoints] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000/isAuthorized').then((result) => setPoints(result.data.results));
  }, []);
  console.log(points);

  const pointList = points.map((point) => (
    <>
      <div>{point.username}  {point.points}</div>
    </>
  ));
  return pointList;
}
