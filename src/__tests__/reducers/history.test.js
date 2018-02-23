import defaultState from './../../constants/DefaultState.js';
import history from './../../reducers/history.js';

describe('history', () => {

  test('Should return default state if no action is taken', () => {
    expect(history(defaultState, { type: null })).toEqual(defaultState);
  });

  test('Should have history equal current, IDK', () => {
    const historySlice = defaultState.history.slice();
    const currentHistoryObject = historySlice[defaultState.history.length -1];
    const squares = currentHistoryObject.squares.slice();
    console.log(historySlice);
    console.log(currentHistoryObject);
    console.log(squares);
    squares.splice(0, 1, 'X');
    const newHistoryObject = { squares };
    historySlice.push(newHistoryObject);
    console.log(historySlice);
    const expectedState = Object.assign({}, defaultState, { history: historySlice });
    expect(history(defaultState, { type: 'CHANGE_HISTORY', index: 0, playerMark: 'X'})).toEqual(expectedState);
  });
});
