import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from '../express/store';
import { Root } from '../express/containers/Root';
import { addLocalizationData } from '../express/locales';
import injectTapEventPlugin from 'react-tap-event-plugin';

const history = createHistory()
const store = configureStore(history);

injectTapEventPlugin();
addLocalizationData();

window.onload = function () {
  ReactDom.render(
    <Provider store={store}>
      <Root history={history} />
    </Provider>
    , document.getElementById('root')
    );
}

