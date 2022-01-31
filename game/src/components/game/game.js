import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import * as actionQuest from '../../redux/action/quest';
import axios from "axios";

const Game = () => {
    const dispatch = useDispatch();

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
        onInitQuest()
    })

    return (
        <div>
            
        </div>
    );
};

export default Game;