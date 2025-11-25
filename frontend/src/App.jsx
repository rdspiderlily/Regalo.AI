import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import GiftIdea from './pages/GiftIdea/GiftIdea';
import About from './pages/About/About';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<GiftIdea />} />
        <Route path="/about" element={<About />} />
        {/* Redirect unknown routes to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}