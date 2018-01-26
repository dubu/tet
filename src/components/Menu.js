import React from 'react';
import style from '../styles/styles.css';
import {startGame} from '../actions/index.js';

class Menu extends React.Component {
    componentDidMount() {
        this.props.dispatch(startGame());
    }
    render() {
        return (
            <div>
                <h1 className={style.pageBanner}>S</h1>
                {!this.props.isPlaying ? <h2 style={{color:'grey'}}>Press spacebar to start the game</h2> : null }
            </div>
        );
    }
}
Menu.propTypes = {
    isPlaying: React.PropTypes.string,
};

export default Menu;