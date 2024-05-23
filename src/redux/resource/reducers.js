import { SET_RESOURCES } from './types';

const resourceInitialState = {
  resources: [],
};

export const resourceReducer = (state = resourceInitialState, action) => {
  switch (action.type) {
    case SET_RESOURCES:
      return { ...state, resources: action.payload };
    default:
      return state;
  }
};
