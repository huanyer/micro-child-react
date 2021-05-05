import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import singleSpaReact from "single-spa-react";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter: ()=>document.getElementById('react-child'),
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

const setPublicPath = () => {
  // @317hu | @com-quality/ 为临时占位标识（后续，可设置入口模块类名）
  return Promise.all([window.System.resolve(`app2-app2_app`)]).then(
    values => {
      console.log(values)
      const [url] = values;
      let webpackPublicPath = '';
      // 1)项目化部署，使用相对路径
      webpackPublicPath = `http://localhost:3001/`;
      /* eslint-disable-next-line */
      __webpack_public_path__ = webpackPublicPath;

      return true;
    }
  );
};

export const bootstrap = [
  () => {
    return setPublicPath();
  },
  lifecycles.bootstrap
];

export const mount = [lifecycles.mount];

export const unmount = [lifecycles.unmount];

export const unload = [lifecycles.unload];
// export const { mount, unmount, bootstrap } = lifecycles;


