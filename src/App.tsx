import React, { FC } from 'react';
import './styles/index.scss';
import './App.scss';
import Button from './component/Button'
import Alert from './component/Alert'

const App: FC = () => {
  const test = () => {
    console.log(111)
  }
  return (
    <div className="App">
      <Button
        btnType="primary"
        disabled={false}
      >
        primary button
      </Button>
      <Button
        btnType="danger"
        disabled={false}
      >
        danger button
    </Button>
      <Button
        btnType="link"
        disabled={false}
        href="https://www.baidu.com"
        target="_blank"
      >
        link button
    </Button>
      <Alert title="111" description="hahhah"></Alert>
      <Alert title="111" alertType="default" closable description="hahhah" onClose={test}></Alert>
    </div >
  );
}

export default App;
