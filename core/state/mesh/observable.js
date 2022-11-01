// Push current value to all subscribers
export const Observable = (initialValue) => {
  let value = initialValue;
  let subscriptions = new Map();

  return {
    subscribe(observer) {
      const { id } = observer;
      subscriptions.set(id, observer);
    },
    unsubscribe(id) {
      subscriptions.delete(id);
    },
    next(nextValue) {
      value = nextValue;
      subscriptions.forEach((observer) => observer.next(nextValue));
    },
    complete() {
      let value = null;
      subscriptions = new Map();
      subscriptions.forEach((observer) => observer.complete());
    },
    getValue() {
      return value;
    },
  };
};
