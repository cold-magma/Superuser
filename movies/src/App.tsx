import React from 'react';
import Menu from "./components/Menu/Menu";
import Content from "./components/Content/Content";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Menu />
      <h1 id="heading">Available Users</h1>
      <div className="main-app-content">
        <Content />
      </div>
    </React.Fragment>
  );
}

export default App;
