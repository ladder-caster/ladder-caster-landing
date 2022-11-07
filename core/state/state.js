import { LC_USER } from "../actions";
import { CLIENT, BUDDY, STEP, BUDDY_CHEST } from "../actions/actions";

export const initialState = {
  [CLIENT]: null,
  [BUDDY]: null,
  [BUDDY_CHEST]: null,
  [STEP]: 0,
  [LC_USER]: {
    name: "Calvin",
  },
};
