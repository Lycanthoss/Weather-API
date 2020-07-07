import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import Content from './content'

export const ow_api_key = "48e0856a0a7a49c322986f251cab9b0c";

function App(props) {
    return (
        <div id="app">
            <Content />
        </div>
    );
}

ReactDOM.render(
    <App />, document.getElementById('root')
);