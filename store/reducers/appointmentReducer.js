import { ACTIONS } from "./../types";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  typeAppointment: "",
  error: null,
  loading: false,
};

export const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_APPOINTMENT:
      return { ...state, loading: false, ...action.payload };

    case ACTIONS.LOADING:
      return { ...state, loading: true };

    case ACTIONS.ERROR:
      return { ...state, error };

    default:
      return { state };
  }
};
