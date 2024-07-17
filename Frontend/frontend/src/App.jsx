import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx';
import MovieFormPage from './pages/MovieFormPage.jsx';
import NavBar from './components/NavBar/NavbBar.jsx';
import './components/NavBar/styles.css'


function App() {
    return (
        <Router>
            <div className="container">
                <NavBar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/movies/add" element={<MovieFormPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;