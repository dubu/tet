import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
it('renders without crashing', () => {
    console.log("test")
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
