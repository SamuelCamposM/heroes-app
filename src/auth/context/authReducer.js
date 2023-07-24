import { types } from "../types/types";

// const initialState = {
//   logged: false,
// };

export const authReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case types.login:
      return { ...state, logged: true, user: payload };
    case types.logout:
      return { ...state, logged: false, user: null };
    default:
      return state;
  }
};
