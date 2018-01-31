import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
it('renders App', () => {
    console.log("test")
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('collision', function () {

    console.log("coll")
    
}); 