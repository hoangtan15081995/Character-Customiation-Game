import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import React, { useState, useEffect } from "react";
function App() {
  return (
    <>
      <div className="App">
        <Header title="hello" subTitle="Character" />
        <Main />
      </div>
    </>
  );
}

export default App;
