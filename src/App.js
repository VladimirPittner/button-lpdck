// @flow
/* eslint-disable no-alert, no-undef */
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Button, ButtonCustom } from './components/Button/Button';
import style from './App.css';

type Props = {||};

class App extends React.PureComponent<Props> {
  render() {
    return (
      <main className={style.App}>
        <article className={style.Showcase}>
          <section className={style.ShowcaseBox}>
            <h2>Buttons with presets</h2>
            <Button>LPDCK Blueberry</Button>
            <br />
            <br />
            <Button isDisabled color="blue" onClick={() => alert('Disabled for you')}>
              Disabled
            </Button>
            <br />
            <br />
            <Button color="red" onClick={() => alert('Strawebery for you')} size="small">
              Strawebery
            </Button>
            <br />
            <br />
            <Button isDisabled size="large">
              Disabled
            </Button>
          </section>
          <section className={style.ShowcaseBox}>
            <h2>Customizable buttons</h2>
            <ButtonCustom color="gold" onClick={() => alert('Banana for you')}>
              Banana
            </ButtonCustom>
            <br />
            <br />
            <ButtonCustom isDisabled color="lime" onClick={() => alert('Disabled for you')}>
              Disabled
            </ButtonCustom>
            <br />
            <br />
            <ButtonCustom color="#51cf66" width="300px" height="70px">
              Apple
            </ButtonCustom>
          </section>
        </article>
      </main>
    );
  }
}

// $FlowFixMe[missing-annot]
export default hot(module)(App);
