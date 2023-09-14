import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LevelPage from './component/Dashboard/LevelPage';
import Dashboard from './component/Dashboard';
import{ Login} from './component/Login';
import AddNewLevel from './component/AddNewLevel';
import UpdateNewLevel from './component/UpdateLevel';

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
        <Route path='/updateLevelDetails/:levelNumber' element={<UpdateNewLevel />} />
        <Route path='/addnewlevel' element={<AddNewLevel/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
