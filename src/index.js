import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { transitions, positions, Provider as AlertProvider, types } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
    position: positions.MIDDLE,
    timeout: 2000,
    offset: '30px',
    type: types.SUCCESS,
    transition: transitions.SCALE
  }

const Root = () => (
<AlertProvider template={AlertTemplate} {...options}>
    <App />
</AlertProvider>
)

ReactDOM.render(<Root/>, document.getElementById('root'));
