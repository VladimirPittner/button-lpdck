// @flow
import * as React from 'react';
import { hot } from 'react-hot-loader';
import style from './App.css';

type Props = {||};

class App extends React.PureComponent<Props> {
  render() {
    return (
      <div className={style.App}>
        <h1>Hello, robot!</h1>
      </div>
    );
  }
}

// $FlowFixMe[missing-annot]
export default hot(module)(App);
