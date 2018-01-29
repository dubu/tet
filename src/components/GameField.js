import React from 'react';
import { Layer, Stage } from 'react-konva';
import { connect } from 'react-redux';
import CurrentTetromino from '../containers/CurrentTetromino.js';
import style from '../styles/styles.css';
const {fieldWidth, fieldHeight} = {fieldWidth: 300, fieldHeight: 660};

let GameField = ({ isPlaying, isPaused, isGameOver })=>{
    if (isPlaying) {
        return (
            <div style={{display: 'inline'}}>
                <div className={style.gameField}>
                    <Stage width={fieldWidth} height={fieldHeight}>
                        <Layer>
                    <CurrentTetromino/>
                        </Layer>
                    </Stage>
                </div>

            </div>
        );
    }
    return <div>r?</div>;
};
const mapStateToProps = ({ gameStatus }) => ({
    isPlaying: gameStatus !== 'IDLE',
    isPaused: gameStatus === 'PAUSED',
    isGameOver: gameStatus === 'GAME_OVER',
});

GameField = connect(mapStateToProps)(GameField);
export default GameField ;
