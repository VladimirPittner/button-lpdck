// @flow
import * as React from 'react';
import { hot } from 'react-hot-loader';
import classNames from 'classnames';
import style from './App.css';

type Props = {||};

class App extends React.PureComponent<Props> {
  render() {
    return (
      <div className={classNames(style.App, style.AppTest)}>
        <h1>Hello, motherfuckers!</h1>
      </div>
    );
  }
}

// $FlowFixMe[missing-annot]
export default hot(module)(App);
