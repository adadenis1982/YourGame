import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actionQuest from '../../redux/action/quest';
import axios from 'axios';
import GameId from '../GameId/GameId';

const Game = () => {
  const dispatch = useDispatch();

  const { themes } = useSelector((state) => state.questReducer);
 
    const onInitQuest = async () => {
      dispatch(actionQuest.initQuestLoading());
      try {
        const { data } = await axios.get('http://localhost:4000/game/', {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        });
        const modifiedData = data.map((theme) => {
          theme.Questions = theme.Questions.map((question) => {
            question.active = true;
            return question;
          });
          return theme;
        });
        dispatch(actionQuest.initQuestSuccess(modifiedData));
      } catch (e) {
        dispatch(actionQuest.initQuestError(e));
      }
    };


  useEffect(() => { onInitQuest() }, []);

  return (
    <div className="container">
      <div>
        <table>
          {themes.map((el) => (
            <tbody key={el.id * 10000000}>
              <tr>
                <td style={{ backgroundColor: "red", width: '200px', height: '100px' }}><font size="4" color="white" face="Arial">{el.title}</font></td>
                {<GameId key={el.id * 1000} el={el} />}
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Game;
