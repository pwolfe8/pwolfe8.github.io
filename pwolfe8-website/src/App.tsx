import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BentoDemo } from '@/pages/BentoExample';
// import Home from '@/pages/Home'; // Assuming you have a Home component

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<BentoDemo />} />
      </Routes>
    </Router>
  );
}

export default App;