import { SET_RESOURCE_FAILED, SET_RESOURCE_LIST, SET_RESOURCE_LOADING } from './types';

export const setResourceList = (resources) => {
  return {
    type: SET_RESOURCE_LIST,
    payload: resources,
  };
};

export const setResourceLoading = () => {
  return {
    type: SET_RESOURCE_LOADING
  }
}

export const setResourceFetchFailed = () => {
  return {
    type: SET_RESOURCE_FAILED
  }
}