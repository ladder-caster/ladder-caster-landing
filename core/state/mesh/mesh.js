import { Observable } from "./observable";
import state from "../../state";

// List of all observable states
const mesh = () => {
  const observables = new Map();
  state.init(observables);

  return {
    getSource(id) {
      return observables.get(id);
    },
    update(id, value) {
      observables.set(id, value);
    },
    observables,
  };
};

export default mesh();
