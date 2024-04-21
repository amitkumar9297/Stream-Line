// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' Component={Login} />
          <Route path='/dashboard' Component={Dashboard} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
