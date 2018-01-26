import React from "react";
import injectTapEventPlugin from 'react-tap-event-plugin';
import GameField from './GameField';
import MenuContainer from '../containers/MenuContainer.js';

injectTapEventPlugin();

const {fieldWidth, fieldHeight} = {fieldWidth: 300, fieldHeight: 660};
const TGame = ()=>(
    <div>
        <div>
            <MenuContainer />
        </div>
       <div>
           <GameField width={fieldWidth} height={fieldHeight} />
       </div>
    </div>);

export default TGame;

