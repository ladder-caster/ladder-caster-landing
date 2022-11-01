import { Observable } from './mesh/observable';
import { initialState } from './state';

const state = () => {
  // Initial state goes here with actions to update it.
  const nextState = initialState;

  const updateState = (observables) => {
    Object.keys(nextState).forEach((key) => {
      observables.set(key, nextState[key]);
    });
    return observables;
  };

  return {
    init(observables) {
      Object.keys(nextState).forEach((key) => {
        observables.set(key, Observable(nextState[key]));
      });
    },
    get() {
      return nextState;
    },
    set(observables, key, next_value) {
      const next_state = {
        ...nextState,
        [key]: next_value,
      };
      updateState(observables);
    },
  };
};

export default state();
