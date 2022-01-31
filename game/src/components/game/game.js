import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as actionQuest from '../../redux/action/quest';
import axios from "axios";
import GameId from '../GameId/GameId';

const Game = () => {
    
    
    const dispatch = useDispatch();

    const {themes} = useSelector((state) => state.questReducer);
   
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
            // console.log(modifiedData)
            dispatch(actionQuest.initQuestSuccess(modifiedData));
        }
        catch (e) {
            dispatch(actionQuest.initQuestError(e));
        }
    }

    useEffect(()=>{
        onInitQuest();
    }, [])

    return (
        <div className="container">
            <div>
                <table>
                    { themes.map((el)=>(<GameId key={el.id * 100000} el={el}/>))}
                </table>
            </div>
        </div>
    );
};

export default Game;
