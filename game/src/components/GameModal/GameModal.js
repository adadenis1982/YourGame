import { Button, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function GameModal(props) {

  const { themes } = useSelector((state) => state.questReducer);

  const theme = themes.find((el) => el.id === props.show.idT);

  let title, question, questText;

  if (theme) {
      title = theme.title;
      question = theme.Questions.find((el)=> el.id === props.show.idQ);
      if (question) {
          questText = question.text;
      }
  } else {
      title = "loading";
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
        <Button variant="danger" onClick={props.onHide}>Неврено</Button>
        <Button variant="dark" onClick={props.onHide}>Верно</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default GameModal;
