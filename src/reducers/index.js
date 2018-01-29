import { combineReducers } from 'redux';
import * as actions from '../actions/index.js';
import gameConstants from '../gameConstants.js';
const { initialGrid, tetrominos, blockUnit } = gameConstants;

function gameStatus(state = 'IDLE', action) {
    switch (action.type) {
        case actions.START_GAME:
        case actions.UNPAUSE_GAME:
            return 'PLAYING';
        case actions.PAUSE_GAME:
            return 'PAUSED';
        case actions.GAME_OVER:
            return 'GAME_OVER';
        default:
            return state;
    }
}

function currentTetromino(state = {}, action) {
    switch (action.type) {
        case actions.START_GAME:
            // console.log("start!!")
            return {
                shape: tetrominos[action.currentRandomShape].shape,
                name: action.currentRandomShape,
                color: tetrominos[action.currentRandomShape].color,
                offsetX: blockUnit * 3,
                offsetY: 0,
            };
        case actions.ADD_TETROMINO:
            return Object.assign({}, action.nextTetromino, { offsetX: blockUnit * 3, offsetY: 0 });
        case actions.MOVE_RIGHT:
            return Object.assign({}, state, { offsetX: state.offsetX + blockUnit });
        case actions.MOVE_LEFT:
            return Object.assign({}, state, { offsetX: state.offsetX - blockUnit });
        case actions.MOVE_DOWN:
            return Object.assign({}, state, { offsetY: state.offsetY + blockUnit });
        case actions.ROTATE_TETROMINO:
            return Object.assign({}, state, { shape: action.rotatedTetromino });
        default:
            return state;
    }
}

const tetrisApp = combineReducers({
    currentTetromino,
    gameStatus
});

export default tetrisApp;
