import { Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { PUT_POINT } from '../../redux/actionTypes/isAuthorized'

function GameModal(props) {

  const { themes } = useSelector((state) => state.questReducer);

  const dispatch = useDispatch();

  let { count } = useSelector((state) => state.countReducer);

  const theme = themes.find((el) => el.id === props.show.idT);

  let title, question, questText, questPrice;

  if (theme) {
      title = theme.title;
      question = theme.Questions.find((el)=> el.id === props.show.idQ);
      if (question) {
          questText = question.text;
          questPrice = question.price
      }
  } else {
      title = "loading";
  }

  const addPoints = (event) => {
    props.onHide();

    count += Number(event.target.value);

    dispatch({ type: PUT_POINT, payload: count });

  }

  const removePoints = (event) => {
    props.onHide();

    count -= Number(event.target.value);

    dispatch({ type: PUT_POINT, payload: count });

  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{questText}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" value={questPrice} onClick={removePoints}>Неврено</Button>
        <Button variant="dark" value={questPrice} onClick={addPoints} >Верно</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default GameModal;
