import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProject from './components/Project/AddProject';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/addProject' element={<AddProject />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
