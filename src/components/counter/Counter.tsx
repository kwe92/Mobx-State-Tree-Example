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
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => {
      if (prevCount === 0) return 0;
      else return prevCount - 1;
    });
  };

  console.log("Store", store.count[0].count);

  return (
    <MainContainer>
      <CounterCard>
        <Count>{store.count[0].count}</Count>
        <StyledButton
          onClick={() => {
            store.count[0].increment();
          }}
        >
          Increment
        </StyledButton>
        <StyledButton
          onClick={() => {
            store.count[0].decrement();
          }}
        >
          Decrement
        </StyledButton>
      </CounterCard>
    </MainContainer>
  );
});

export default Counter;
