import './index.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Entry from './components/Editor';
import Navbar from './components/Navbar';
import dplogo from './dplogo.png';


const App = () => {

    return (
        <Router>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-2'>
                        <img src={dplogo} className='dplogo'></img>
                    <Navbar />
                    </div>
                    <div className='col'>
                        <Routes>
                            <Route path='/' element={<Dashboard />} />
                            <Route path='/entry' element={<Entry />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    )
}
export default App