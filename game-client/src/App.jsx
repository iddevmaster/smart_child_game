import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home';
import NormalMode from './components/NormalMode';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/normal-mode" element={<NormalMode />} />
      </Routes>
    </Router>
  )
}

export default App
