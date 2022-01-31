import {Button, Modal} from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Modal1(props) {

    const id = props.curId.split(':');

    console.log(id)

    const { themes } = useSelector((state) => state.questReducer);

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
                {/* {themes[Number(id[0])].title} */}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    {/* {themes[Number(id[0])].Questions[Number(id[1])].text} */}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
