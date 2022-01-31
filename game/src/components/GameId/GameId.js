import React from 'react';
import { Button } from 'react-bootstrap';
import Modal1 from './modal';

function GameId({ el }) {
  // console.log(el);

  const [modalShow, setModalShow] = React.useState(false);

  const [currentQuestId, setCurrentQuestId] = React.useState('');

  const onPriceClick = (event) => {
    setCurrentQuestId(event.target.id);
    setModalShow(true);
  };

  return (
    <>
      <Modal1
        curId={currentQuestId}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <tr key={el.id}>
        <td>{el.title}</td>
        {el.Questions.map((el2) => (
          <td key={el2.id * 1000}>
            <Button
              id={`${el.id}:${el2.id}`}
              variant="dark"
              onClick={onPriceClick}
            >
              {el2.price}
            </Button>
          </td>
        ))}
      </tr>
    </>
  );
}

export default GameId;
