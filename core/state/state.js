import { LC_USER } from "../actions";
import {
  CLIENT,
  BUDDY,
  STEP,
  BUDDY_CHEST,
  STATUS_REF,
} from "../actions/actions";

export const initialState = {
  [CLIENT]: null,
  [BUDDY]: null,
  [BUDDY_CHEST]: null,
  [STEP]: 0,
  [STATUS_REF]: {},
  [LC_USER]: {
    name: "Calvin",
  },
};
