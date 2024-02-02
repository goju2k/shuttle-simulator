import styled from 'styled-components';

import { Route, Routes, Link } from 'react-router-dom';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <h1>
        <span> Hello there, </span>
        Welcome app-shuttle-control-center 👋
      </h1>
    </StyledApp>
  );
}

export default App;