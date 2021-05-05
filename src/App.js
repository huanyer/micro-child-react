import React, { Component } from 'react';
import { BrowserRouter as RouterContainer } from 'react-router-dom';
import RootRouter from './views/router';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
    // logErrorToMyService(error, errorInfo);
    console.log(error);
    console.log(errorInfo);
  }
  render() {
    const supportsHistory = 'pushState' in window.history;
    if (this.state.hasError) {
      return '页面发生了未知错误';
    }
    
    return (
      <RouterContainer
        basename="/react-child"
        forceRefresh={!supportsHistory}
        keyLength={10}
      >
          <RootRouter />
      </RouterContainer>
    );
  }
}

export default App;