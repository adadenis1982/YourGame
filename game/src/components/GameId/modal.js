import {Button, Modal} from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Modal1(props) {

    const id = props.curId.split(':');

    console.log(id)

    const { themes, loading } = useSelector((state) => state.questReducer);

    const theme = themes.find((el) => el.id === Number(id[0]));
    let title, question, questText
    if (theme){
        title = theme.title;
        question = theme.Questions.find((el)=> el.id === Number(id[1]));
        if (question){
            questText = question.text;
        }
    }else{
        title = "loading";
    }


    console.log(themes);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                 {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    {questText}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
