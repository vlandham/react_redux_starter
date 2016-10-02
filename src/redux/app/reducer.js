
import * as Actions from './actions';

export const initialState = {
  highlightHourly: false
}

export default function app(state = initialState, action = {}) {
  switch (action.type) {
    case Actions.HIGHLIGHT_HOURLY:
      return {
        ...state,
        highlightHourly: action.highlightPoint,
      };
    default:
      return state;
  }
};
