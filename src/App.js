import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

// Components
import FrontPage from "./components/FrontPage";
import CalculateRepair from "./components/CalculateRepair";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/calculate" element={<CalculateRepair />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
export default App;
