import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LevelPage from './component/Dashboard/LevelPage';
import Dashboard from './component/Dashboard';
import{ Login} from './component/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Login1/> */}
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<App />} />
        <Route path='/login-register' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/level/:levelNumber' element={<LevelPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
