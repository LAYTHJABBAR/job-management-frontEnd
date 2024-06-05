import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import JobDetailPage from './pages/JobDetailPage';
import JobForm from './components/JobForm';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/jobs/:id" element={<JobDetailPage />} />
                <Route path="/add-job" element={<JobForm />} />
                <Route path="/edit-job/:id" element={<JobForm />} />
            </Routes>
        </Router>
    );
};

export default App;
