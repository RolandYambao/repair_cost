import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

// Components
import CalculateRepair from "./components/CalculateRepair";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/calculate" element={<CalculateRepair />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
