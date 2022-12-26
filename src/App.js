import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/section/Menu';
import HomePage from './components/elements/HomePage';
import DriftPage from './components/elements/DriftPage';
import TimeAttackPage from './components/elements/TimeAttackPage';
import ForzaPage from './components/elements/ForzaPage';

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
