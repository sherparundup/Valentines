import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Just import Routes and Route
import AskingHerTobeMine from './components/AskingHerTobeMine';
import MemoryLane from './components/MemoryLane';

const App = () => {
  return (
    <Routes>  {/* Only Routes and Route components here */}
      <Route path="/" element={<AskingHerTobeMine />} />
      <Route path="/MemoryLane" element={<MemoryLane />} />
    </Routes>
  );
};

export default App;
