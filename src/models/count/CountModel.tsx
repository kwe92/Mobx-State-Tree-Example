import { types } from "mobx-state-tree";

const CountModel = types
  .model({
    id: types.identifierNumber,
    count: types.number,
  })
  .actions((self) => ({
    increment() {
      self.count = self.count + 1;
    },
    decrement() {
      if (self.count === 0) {
        return;
      } else {
        self.count--;
      }
    },
  }));

const CountStore = types
  .model({
    count: types.array(CountModel),
  })
  .actions((self) => ({
    addCount(countObj: Count) {
      self.count.pop();
      self.count.push(countObj);
    },
  }));

export default CountStore;
