import React  from 'react';
import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import Dashboard from './Screens/dashboard/dashboard';
import Download from './Screens/downloads/download';
import Upload from './Screens/upload_status/upload';
import Tracenet from './Screens/Tracenet/tracenet';
import Demo from './Screens/demo/demo';
import TracenetForm from './Screens/TraceneForm/tracenetForm';


function App() {
  return (
    <div>
    <div className="main-body">
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route path='tracenet' element={<Tracenet />} />
          <Route path='trace' element={< TracenetForm/>} />
          <Route path='demo' element={<Demo />} />
          <Route path='download' element={<Download />} />
          <Route path='upload_status' element={<Upload />} />
        </Route>
      </Routes>
      <Outlet />
    </div>
    </div>
  );
}

export default App;


