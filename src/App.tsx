import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import JobDetailPage from './pages/JobDetailPage';
import JobForm from './components/JobForm';
import ResponsiveAppBar from './components/header';

const App: React.FC = () => {
    return (
      <div className="App">
<ResponsiveAppBar />
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/jobs/:id" element={<JobDetailPage />} />
                <Route path="/add-job" element={<JobForm />} />
                <Route path="/edit-job/:id" element={<JobForm />} />
            </Routes>
        </Router>
      </div>
    );
};

export default App;
