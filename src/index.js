import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';
import Board from './components/Board';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/reducer-index';

const store = createStore(rootReducer);

let sub = store.subscribe(() =>
  console.log(store.getState())
);

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Game />,
    </Provider>,
    document.getElementById('root')
  );
};
render(Board);
