import React from "react";
import injectTapEventPlugin from 'react-tap-event-plugin';
import GameField from './GameField';

injectTapEventPlugin();

const {fieldWidth, fieldHeight} = {fieldWidth: 300, fieldHeight: 660};
const TGame = ()=>(
    <div>
       <div>
           <GameField width={fieldWidth} height={fieldHeight} />
       </div>
    </div>

);
export default TGame;
