export const SPAWN_TETROMINO = 'SPAWN_TETROMINO';
export const ROTATE_TETROMINO = 'ROTATE_TETROMINO';
export const START_GAME = 'START_GAME';
export const STOP_GAME = 'STOP_GAME';
export const GAME_OVER = 'GAME_OVER';
export const CLEAR_LINE = 'CLEAR_LINE';
export const ADD_SCORE = 'ADD_SCORE';
export const MOVE_TETROMINO = 'MOVE_TETROMINO';
export const MOVE_RIGHT = 'MOVE_RIGHT';
export const MOVE_LEFT = 'MOVE_LEFT';
export const MOVE_DOWN = 'MOVE_DOWN';
export const ADD_TETROMINO = 'ADD_TETROMINO';
export const PAUSE_GAME = 'PAUSE_GAME';
export const UNPAUSE_GAME = 'UNPAUSE_GAME';

export const startGame = () => {
    const  shapesMapping  = ['straight', 'square', 'cross', 'leftGun', 'rightGun', 'leftSnake', 'rightSnake',];
    const currentRandomNumber = Math.floor(Math.random() * 7);
    const nextRandomNumber = Math.floor(Math.random() * 7);
    const currentRandomShape = shapesMapping[currentRandomNumber];
    const nextRandomShape = shapesMapping[nextRandomNumber];

    return {
        type: START_GAME,
        currentRandomShape,
        nextRandomShape,
    };
};

export const loadMenu = () => (
    function(dispatch,getState) {
        function handleSpaceBar(e) {
            if (e.keyCode === 32) {
                dispatch(loadGame());
                dispatch(moveTetromino('down'));

                window.removeEventListener('keyup', handleSpaceBar);
            }
        }
        window.addEventListener('keyup', handleSpaceBar);


        // dropTetromino(dispatch, Date.now() ,getState);

    }
);
export const loadGame = () => (
    function (dispatch, getState){
        dispatch(startGame(),getState);
    }
);


function dropTetromino(dispatch, startTime, getState) {

    dispatch(moveTetromino('down'));

}

export const moveTetromino = (direction) => (
    function (dispatch, getState) {

        dispatch(moveDown());
    }
);

export const moveDown = () => ({
    type: MOVE_DOWN,
});

