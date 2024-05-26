import { SET_RESOURCE_FAILED, SET_RESOURCE_LIST, SET_RESOURCE_LOADING } from './types';

const resourceInitialState = {
  resourceList: [],
  resourceLoading: false,
  resourceEmpty: false,
  resourceFetchFailed: false
};

export const resourceReducer = (state = resourceInitialState, action) => {
  switch (action.type) {
    case SET_RESOURCE_LIST:
      return {
        ...state,
        resourceList: action.payload,
        resourceLoading: false,
        resourceEmpty: !Boolean(action.payload.length)
      };
    case SET_RESOURCE_LOADING:
      return {
        ...state,
        resourceLoading: true,
        resourceList: [],
        resourceFetchFailed: false,
        resourceEmpty: false
      };
    case SET_RESOURCE_FAILED:
      return {
        ...state,
        resourceFetchFailed: true,
        resourceList: [],
        resourceLoading: false,
        resourceEmpty: false
      };
    default:
      return state;
  }
};