import React from 'react';
import AppRouting from './AppRouting';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="appbody">
        <AppRouting />
      </div>
    </div>
  );
}

export default App;
