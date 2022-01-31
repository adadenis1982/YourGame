import React from 'react';
import { useSelector } from 'react-redux';
import Table from '../Table/Table';

function Home() {
  const name = useSelector((state) => state.checkSessionReducer.user);


  return (<> {typeof name.username === 'string' ? `Приветствуем Вас ${name.username}` : 'Нет никого'} <Table></Table> </>);

}

export default Home;
