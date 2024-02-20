import { Axios } from 'axios';
import styled from 'styled-components';

// import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

const ax = new Axios({ baseURL: import.meta.env.VITE_TARGET_SERVER_AUTH || '' });

export function App() {
  return (
    <StyledApp>
      <button onClick={async () => {
        alert(await ax.get('/api'));
      }}
      >호출
      </button>
    </StyledApp>
  );
}

export default App;