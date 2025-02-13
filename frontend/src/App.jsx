import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AskingHerTobeMine from './components/AskingHerTobeMine';
import MemoryLaneAsking from './components/MemoryLaneAsking';
import MemoryLane from './components/MemoryLane';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AskingHerTobeMine />} />
        <Route path="/MemoryLane" element={<MemoryLane />} />
        {/* <Route path="/" element={<MemoryLaneAsking />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
