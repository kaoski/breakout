import './App.css';
import styled from 'styled-components';

const SIZE = 20;

function App() {
  return (
    <div className='App'>
      <Paddle size={SIZE}/>
    </div>
  );
}

const Paddle = styled.div`
  position: absolute;
  background-color: red;
  height: 20px;
  width: 100px;
  top: 20px;
`

export default App;
