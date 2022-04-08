import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

// Components
import Repair from "./components/Repair";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Repair />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
