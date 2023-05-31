import { types } from "mobx-state-tree";

const CountModel = types
  .model({
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
    counts: types.array(CountModel),
  })
  .actions((self) => ({
    initalCount() {
      self.counts.push(CountModel.create({ count: 0 }));
    },
    currentCount() {
      return self.counts.at(-1)!.count;
    },
  }));

export default CountStore;
