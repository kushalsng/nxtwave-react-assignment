import axios from "axios"
import { ADD_RESOURCE_URL, GET_RESOURCE_URL } from "../constants/api"

export const getResources = async () => {
  return axios.get(GET_RESOURCE_URL)
}

export const addResource = async (params) => {
  return axios.post(ADD_RESOURCE_URL, params);
}