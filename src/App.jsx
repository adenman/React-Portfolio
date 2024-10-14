import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import './App.css';

function App() {
  return (
    <>
    <Nav />
    <div className="app-container">
      <Outlet />
    </div>
    </>
  );
}

export default App;