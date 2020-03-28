import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button,Table} from 'antd';
import {BrowserRouter,Router,Route,Link} from 'react-router-dom';

const Door: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button type="default">
          {/* <BrowserRouter> */}
          {/* 外层已经有了BrowserRouter，这里在加上，页面会出现不跳转的bug */}
            {/* link不能单独存在，必须配合router */}
            <Link to={'/content'}>示例页面</Link>
          {/* </BrowserRouter> */}
        </Button>
      </header>
    </div>
  );
}

export default Door;
