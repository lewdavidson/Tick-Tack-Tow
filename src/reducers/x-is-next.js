import defaultState from './../constants/DefaultState';

export default (state = defaultState, action) => {
  switch(action.type) {
  case 'SWITCH_TURNS':
    const xIsNext = state.xIsNext;
    let newNext = Object.assign({}, state, {
      xIsNext: !this.state.xIsNext
    });
    return newNext;
  default: return state;
  }
};

//why work with default state? wouldn't we want state instead so we can have up to date information?
