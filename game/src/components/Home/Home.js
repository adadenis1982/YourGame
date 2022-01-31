import React from 'react';
import { useSelector } from 'react-redux';

function Home(props) {
  const name = useSelector((state) => state.checkSessionReducer.user);

  return <> {typeof name === 'string' ? `Приветствуем Вас ${name}` : 'Нет никого'} </>;
}

export default Home;
