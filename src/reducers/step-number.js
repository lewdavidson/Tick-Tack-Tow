import defaultState from './../constants/DefaultState';

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'SET_STEPS':
      const stepNumber = state.stepNumber;
      const history = state.history;
      let newStep = Object.assign({}, state, {
        stepNumber: history.length
      });
    return newStep;
  default:
    return state;
  }
};
