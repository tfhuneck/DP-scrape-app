import './index.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Editor from './components/Editor';
import Navbar from './components/Navbar';
import dplogo from './dplogo.png';
import DataExport from './components/PrintData'
import Backup from './components/Backup ';

const App = () => {

    return (
        <Router>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-2 fixed-top one'>
                        <img src={dplogo} className='dplogo'></img>
                    <Navbar />
                    </div>
                    <div className='col offset-2 two'>
                        <Routes>
                            <Route path='/' element={<Dashboard />} />
                            <Route path='/editor' element={<Editor/>} />
                            <Route path='/export' element={<DataExport />} />
                            <Route path='/backup' element={<Backup />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    )
}
export default App