import styled from "styled-components";

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled(Column)`
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const CounterCard = styled(Column)`
  width: 18rem;
  height: 24rem;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const StyledButton = styled.button`
  width: 90%;
  height: 4rem;
  color: white;
  background: purple;
  border: none;
  border-radius: 1rem;
`;

const Count = styled.p`
  font-size: 4rem;
`;

export { MainContainer, CounterCard, StyledButton, Count };
