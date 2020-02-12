import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';
// import { tempSetUser, check } from './modules/user';
import { HelmetProvider } from 'react-helmet-async';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
const theme = createMuiTheme({
  typography: {
    fontFamily: 'RIDIBatang',
  },
});

// function loadUser() {
//   try {
//     const user = localStorage.getItem('user');
//     if (!user) return; // 로그인 상태가 아니라면 아무것도 안함

//     // store.dispatch(tempSetUser(user));
//     // store.dispatch(check());
//   } catch (e) {
//     console.log('localStorage is not working');
//   }
// }

sagaMiddleware.run(rootSaga);
// loadUser();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();

// serviceWorker.unregister();
