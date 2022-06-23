import { ACTIONS } from "../types";

export const scheduleAppointment = (
  firstName,
  lastName,
  email,
  phoneNumber,
  typeAppointment
) => {
  return async (dispatch, getState) => {
    dispatch({ type: ACTIONS.LOADING });
    try {
      // Logic to send data to server
      dispatch({
        type: ACTIONS.GET_APPOINTMENT,
        payload: {
          firstName,
          lastName,
          email,
          phoneNumber,
          typeAppointment,
        },
      });
    } catch (error) {
      dispatch({
        type: ACTIONS.ERROR,
        payload: { error: error, loading: false },
      });
    }
  };
};
