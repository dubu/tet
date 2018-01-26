import { createStore, applyMiddleware } from 'redux';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk';
import './App.css';
import TGame from './components/TGame'
import {Provider} from "react-redux";
import TetrisApp from './reducers/index.js';

const store = createStore(
    TetrisApp,
    applyMiddleware(ReduxThunk)
);

const App = () => (
    <Provider store={store}>
        <div>
            <TGame />
        </div>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('react-app'));
