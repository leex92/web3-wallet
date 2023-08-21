import { useEffect, useRef } from 'react';
import './App.css';
import Web3 from 'web3';
import { Button } from 'antd';
function App() {
  const web3 = useRef();
  useEffect(() => {
    web3.current = new Web3(
      Web3.givenProvider ||
        'wss://goerli.infura.io/ws/v3/2d43c374871243fcb6b994dc16fc4d65'
    );
    console.log(web3.current);
  }, []);
  return (
    <>
      <div className="App">hello web3</div>;
      <Button type="primary">主要按钮</Button>
    </>
  );
}

export default App;
