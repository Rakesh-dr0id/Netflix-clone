import './app.scss';
import Home from './pages/Home/Home';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import Login from './pages/login/Login';

function App() {
  return (
    <div>
      <Login />
      <Home />
      <Register />
      <Watch />
    </div>
  );
}

export default App;
