import './app.scss';
import Home from './pages/Home/Home';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import Login from './pages/login/Login';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Register />} />

      <Route path="/login" element={<Login />} />

      <Route path="/login/home" element={<Home />} />

      <Route path="login/home/watch" element={<Watch />} />
    </Routes>
  );
}

export default App;
