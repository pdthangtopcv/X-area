import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import MiddleContentLayout from "./layouts/middle-content";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import AdminView from "./components/AdminView";
import MainPlayerView from "./components/MainPlayerView";
import ChooseAnswers from "./components/ChooseAnswers";
import GetMainInfo from './components/GetMainInfo';
import Dashboard from "./components/Dashboard";
import SidePlayerView from "./components/SidePlayerView";

function App() {
  return (
      <Routes>
          <Route path="/auth" element={<MiddleContentLayout/>}>
              <Route path="login" element={ <Login/> } />
              <Route path="register" element={ <Register/> } />
          </Route>
          <Route path="/admin-view" element={ <AdminView/> }>

          </Route>
          <Route path="/side-player" element={ <SidePlayerView/> } />
          <Route path="/main-player" element={ <MainPlayerView/>}>
              <Route path="choose-answers" element={<ChooseAnswers />} />
              <Route path="get-main-info" element={<GetMainInfo/>} />
              <Route path="dashboard" element={<Dashboard/>} />
          </Route>
      </Routes>
  );
}

export default App;
