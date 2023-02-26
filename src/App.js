import React from 'react';
import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import Dashboard from './Screens/dashboard/dashboard';
import Download from './Screens/downloads/download';
import Upload from './Screens/upload_status/upload';
import TracenetForm from './Screens/TraceneForm/tracenetForm';
// import Register from './Authentication/user_registeration/register';
import Create_user from './Screens/User_Setting/create_user/create_user';
import User_detail from './Screens/User_Setting/user_detail/user_detail';
import Login from './Authentication/login/login';
import Register from './Authentication/auth/register';
import Update_user from './Screens/User_Setting/update_user/update_user';

function App() {
  return (
    
      <div className="wrapper">
        <Routes>
          <Route exact path='/reg' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/' element={<Dashboard />} >
            <Route exact path='/tracenet' element={< TracenetForm />} />
            <Route exact path='/download' element={<Download />} />
            <Route exact path='/upload_status' element={<Upload />} />
            <Route exact path='/user' element={<Create_user />} />
            <Route exact path='/user-detail' element={<User_detail />} />
            <Route exact path='/user-update' element={< Update_user/>} />
          </Route>
        </Routes>
      
      </div>
    
  );
}

export default App;


