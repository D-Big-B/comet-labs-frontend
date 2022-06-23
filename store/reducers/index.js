import { combineReducers } from "redux";
import { appointmentReducer } from "./appointmentReducer";

export default combineReducers({
  appointment: appointmentReducer,
});
