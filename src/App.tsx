import React from 'react';
import './App.css';
import Todos from './components/Todos';

const App: React.FC = () => {

  return (
    <div className="App">
      <header className="App-header">TODOS</header>
      <Todos />
    </div>
  );
};

export default App;
