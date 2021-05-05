import { renderRoutes } from 'react-router-config';
import Loadable from 'react-loadable';

const loading = ({ error, pastDelay }) => {
  if (error) {
    return 'null';
  } else if (pastDelay) {
    return 'loading...';
  } else {
    return null;
  }
};

const delay = 100;

const routes = [
        {
          path: '/a.html', //派班
          component: Loadable({
            loader: () => import('./pages/a.js'),
            loading,
            delay
          })
        },
        {
          path: '/b.html', //选择班次/接班
          component: Loadable({
            loader: () => import('./pages/b.js'),
            loading,
            delay
          })
        },
  ];

const Index = (props) => {
  return renderRoutes(routes);
};
export default Index;
