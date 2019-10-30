import React, { Component, Fragment } from 'react';
import { GlobalStyle } from './style';
import { IconfontStyle } from '../src/statics/iconfont/iconfont';
import Header from './common/header';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <IconfontStyle />
        <Header />
      </Fragment>
    )
  }
}

export default App;
