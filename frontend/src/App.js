import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../src/pages/LandingPage';
import AdminPage from '../src/pages/AdminPage';
import StartExamPage from '../src/pages/StartExamPage';
import ExamPage from '../src/pages/ExamPage';
import ResultPage from '../src/pages/ResultPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/start" element={<StartExamPage />} />
        <Route path="/exam/:userId" element={<ExamPage />} />
        <Route path="/result/:userId" element={<ResultPage />} />
        <Route path="/" element={<StartExamPage />} />
      </Routes>
    </Router>
  );
};

export default App;
