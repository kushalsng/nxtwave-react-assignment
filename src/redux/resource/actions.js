import { SET_RESOURCES } from './types';

export const setResources = (resources) => {
  return {
    type: SET_RESOURCES,
    payload: resources,
  };
};
