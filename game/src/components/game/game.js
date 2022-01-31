import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as actionQuest from '../../redux/action/quest';
import axios from "axios";
import {Button} from "react-bootstrap";
import Modal1 from "./modal"

const Game = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [currentQuestId, setCurrentQuestId] = React.useState({});
    const dispatch = useDispatch();

    const {themes} = useSelector((state) => state.questReducer);
    const ref = useRef();
    const onPriceClick = (event) => {
        //(event) => setCurrentQuestId(event);
            //return setModalShow(true)
        console.log(event)
    }
    const onInitQuest = async () => {
        dispatch(actionQuest.initQuestLoading());
        try {
            const { data } = await axios.get('http://localhost:4000/game/', {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            const modifiedData = data.map((theme)=>{
                theme.Questions = theme.Questions.map((question)=> {
                    question.active = true;
                    return question;
                })
                return theme;
            })
            console.log(modifiedData)
            dispatch(actionQuest.initQuestSuccess(modifiedData));
        }
        catch (e) {
            dispatch(actionQuest.initQuestError(e));
        }
    }

    useEffect(()=>{
        console.log(currentQuestId.target)
    }, [currentQuestId])

    useEffect(()=>{
        onInitQuest();
    }, [dispatch])

    return (
        <div className="container">
            <Modal1
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div>
                <table>
                    {/*<tr>*/}
                    {/*    <th>&nbsp;</th><th>2004</th><th>2005</th><th>2006</th>*/}
                    {/*</tr>*/}
                    {themes.map((el)=>(
                        <tr key={el.id}>
                            <td>{el.title}</td>
                            {el.Questions.map((el2) => (<td key={el2.id*1000} onClick={onPriceClick}><Button  variant="dark" ref={ref}>{el2.price}</Button></td>))}
                        </tr>
                    ))

                    }
                </table>
            </div>
        </div>
    );
};

export default Game;