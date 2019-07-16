import axios from "axios";
import { API_BASE_URL } from "../constantes";
import {GET_ERRORS} from "./types";

export const addProjectTask = (project_task, history) => async dispatch => {
  try {
    await axios.post(API_BASE_URL + "/add", project_task);
    history.push("/");
    dispatch({
       type:GET_ERRORS,
       payload:{}  
    })
  } catch (error) {
      dispatch({
          type:GET_ERRORS,
          payload:error.response.data
      }); 
  }
};
