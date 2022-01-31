import React from 'react';
import { useSelector } from 'react-redux';
import Table from '../Table/Table';

function Home() {
  const name = useSelector((state) => state.checkSessionReducer.user);

  return (
    <>
      <p>{typeof name === 'string' ? `Приветствуем Вас ${name}` : 'Нет никого'}</p>
      <Table></Table>
    </>
  )
}

export default Home;
