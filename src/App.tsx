import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './pages/SignIn/signIn';
import Register from './pages/Register/register';
import NotFound from './pages/Notfound/notFound';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to="/signin" />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        {/* Default route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
