import React, { useState } from "react";
import {
  MainContainer,
  CounterCard,
  StyledButton,
  Count,
} from "./CounterStyles";

import CountStore from "../../models/count/CountModel";
import { observer } from "mobx-react-lite";

// const initCount: Count = { id: 1001, count: 0 };

const store = CountStore.create({});
store.initalCount();

const Counter = observer((props: {}) => {
  console.log("Store", store.counts[0].count);

  const count = store.currentCount();

  const increment = () => {
    store.counts[0].increment();
  };

  const decrement = () => {
    store.counts[0].decrement();
  };

  return (
    <MainContainer>
      <CounterCard>
        <Count>{count}</Count>
        <StyledButton onClick={increment}>Increment</StyledButton>
        <StyledButton onClick={decrement}>Decrement</StyledButton>
      </CounterCard>
    </MainContainer>
  );
});

export default Counter;
