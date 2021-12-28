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

function App() {
  return (
      <Routes>
          <Route path="/auth" element={<MiddleContentLayout/>}>
              <Route path="login" element={ <Login/> } />
              <Route path="register" element={ <Register/> } />
          </Route>
          <Route path="/admin-view" element={ <AdminView/> }>
              {/*<Route path="side-player" element={ <SidePlayerView/> } />*/}
              {/*<Route path='admin-view' element={ <AdminView/> } />*/}
          </Route>
          <Route path="/main-player" element={ <MainPlayerView/>}>
              <Route path="choose-answers" element={<ChooseAnswers/>} />
              <Route path="get-main-info" element={<GetMainInfo/>} />
          </Route>
      </Routes>
  );
}

export default App;
