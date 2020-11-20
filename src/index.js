// @flow
/* eslint-env browser */
import * as React from 'react';
import ReactDOM from 'react-dom';
// $FlowFixMe[cannot-resolve-module]
import './normalize.scss';
// $FlowFixMe[cannot-resolve-module]
import './global.scss';
import App from './App';

ReactDOM.render(<App />, document.getElementById('app'));
