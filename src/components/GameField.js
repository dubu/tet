import React from 'react';
import { Layer, Stage } from 'react-konva';
import { connect } from 'react-redux';
import CurrentTetromino from '../containers/CurrentTetromino.js';
import style from '../styles/styles.css';
const {fieldWidth, fieldHeight} = {fieldWidth: 300, fieldHeight: 660};
let GameField = ()=>{
   return (
       <div style={{display: 'inline'}}>
           <div className={style.gameField}>
                  <CurrentTetromino />
           </div>
       </div>
   );
};
GameField = connect()(GameField);
export default GameField ;
