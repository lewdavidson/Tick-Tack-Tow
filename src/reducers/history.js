import defaultState from './../constants/DefaultState';

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'CHANGE_HISTORY':
      const historySlice = state.history.slice(0, state.stepNumber + 1);
      const current = historySlice[history.length - 1];
      let squares = current.squares.slice();

      squares[action.index] = action.playerMark;

      let newHistory = Object.assign({}, state, {
        history: historySlice.concat([{
          squares: squares,
        }])
      });
    return newHistory;
  default:
      return state;
  }
};
