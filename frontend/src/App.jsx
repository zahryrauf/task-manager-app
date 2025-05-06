import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from '/pages/TaskList';
import Login from '/pages/Login';
import NotFound from '/pages/NotFound';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/tasks" element={<TaskList tasks={[]} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;