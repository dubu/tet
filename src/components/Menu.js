import React from 'react';
import style from '../styles/styles.css';
import {loadMenu,loadGame} from '../actions/index.js';

class Menu extends React.Component {
    componentDidMount() {
        this.props.dispatch(loadMenu());


    }

    start_game = () => {
        this.props.dispatch(loadGame());
    };

    render() {
        return (
            <div>
                <h1 className={style.pageBanner}>S</h1>
                {!this.props.isPlaying ? <h2 style={{color:'grey'}}>P s</h2> : null }
                <button onClick={this.start_game} > start </button>
            </div>

        );
    }
}
Menu.propTypes = {
    isPlaying: React.PropTypes.string,
};

export default Menu;