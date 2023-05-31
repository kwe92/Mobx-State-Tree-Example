import React, { useState } from "react";
import {
  MainContainer,
  CounterCard,
  StyledButton,
  Count,
} from "./CounterStyles";

import CountStore from "../../models/count/CountModel";
import { observer } from "mobx-react-lite";

const initCount: Count = { id: 1001, count: 0 };

const store = CountStore.create({});
store.addCount(initCount);

const Counter = observer((props: {}) => {
  console.log("Store", store.count[0].count);

  const increment = () => {
    store.count[0].increment();
  };

  const decrement = () => {
    store.count[0].decrement();
  };
  return (
    <MainContainer>
      <CounterCard>
        <Count>{store.count[0].count}</Count>
        <StyledButton onClick={increment}>Increment</StyledButton>
        <StyledButton onClick={decrement}>Decrement</StyledButton>
      </CounterCard>
    </MainContainer>
  );
});

export default Counter;
