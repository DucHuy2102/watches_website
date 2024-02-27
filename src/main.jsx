import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { HomePage, Login, ProductPage, Register } from './page/index';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/product' element={<ProductPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    </Router>
);
