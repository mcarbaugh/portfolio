import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import configureStore from './state/store';
import registerServiceWorker from './registerServiceWorker';
import Home from './views/pages/Home';
import ColorInspector from './views/pages/ColorInspector';
import DataGrid from './views/pages/InfiniteGrid';
import ConnectedThemeProvider from './views/containers/ConnectedThemeProvider';
import './index.css';

const history = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedThemeProvider>
      <Router history={history}>
        <Switch>
          <Route path={'/color-inspector'} component={ColorInspector} />
          <Route path={'/infinite-grid'} component={DataGrid} />
          <Route path={'/*'} component={Home} />
        </Switch>
      </Router>
    </ConnectedThemeProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
