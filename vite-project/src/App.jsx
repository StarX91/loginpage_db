import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { gapi } from 'gapi-script';
import Register from "./pages/Authentication/Register";
import Login from "./pages/Authentication/Login";
import Card from "./pages/StareXplorer/Card/Card";
import Navbar from "./pages/StareXplorer/Navbar/Navbar";
import { ThemeProvider } from './context/ThemeContext';
import Map from "./pages/StareXplorer/Map/Map";
// import Profile from './components/Profile/Profile';
import { ProfileContext } from './context/ProfileContext';
import ResetPassword from './pages/Authentication/ResetPassword';
import ForgotPassword from './pages/Authentication/ForgotPassword';
import EditProfile from './pages/StareXplorer/Navbar/EditProfile';
import Edit from './pages/StarStork/Dashboard/EditProfile';
import Edits from './pages/Services/Dashboard/EditProfile';
import Board from './pages/Services/Dashboard/Board';
import Main from './pages/StarStork/Dashboard/Main';
import TMain from './pages/StarStork/Tasks/Tmain';
import Dmain from './pages/StarStork/Detectors/Dmain';
import Info from './pages/Services/Settings/Info';
import InfoSS from './pages/StarStork/Settings/Profile/Info';
import Subscription from './pages/StarStork/Settings/Subscription/Info';
import Invoices from './pages/StarStork/Settings/Invoices/Info';

const clientId = "261778488059-r3p7jn1uctichj37qi3kq21j1fghclns.apps.googleusercontent.com";

const App = () => {
  const [profileImg, setProfileImg] = useState('');

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "profile email"
      }).then(() => {
        console.log('GAPI client initialized');
      }).catch(error => {
        console.error('Error initializing GAPI client:', error);
      });
    }
    gapi.load('client:auth2', start);
  }, []);

  return (
    <div className='w-full h-full bg-black'>
    <ThemeProvider>
      <ProfileContext.Provider value={{ profileImg, setProfileImg }}>
        <Router>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/services" element={<Board />} />
            <Route path="/services/edit-profile" element={<Edits />} />
            <Route path="/settings" element={<Info />} />
            <Route path="/ss/dashboard" element={<Main/>} />
            <Route path="/ss/dashboard/tasks" element={<TMain/>} />
            <Route path="/ss/dashboard/detectors" element={<Dmain/>} />
            <Route path="/ss/edit-profile" element={<Edit/>} />
            <Route path="/ss/settings" element={<InfoSS/>} />
            <Route path="/ss/settings/subscriptions" element={<Subscription/>} />
            <Route path="/ss/settings/invoices" element={<Invoices/>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/edit-profile" element={<EditProfile />} />
          </Routes>
        </Router>
      </ProfileContext.Provider>
    </ThemeProvider>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="sm:flex min-[320px]:flex-col">
        <Card />
        <Map />
      </div>
    </div>
  );
};

export default App;
