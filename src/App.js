import './index.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HashRouter } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Editor from './components/Editor';
import Navbar from './components/Navbar';
import dplogo from './images/dplogo.png';
import DataExport from './components/PrintData';
import Backup from './components/Backup ';
import Help from './components/Help';

const App = () => {

    return (
        <HashRouter>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-2 fixed-top one'>
                        <img src={dplogo} className='dplogo'></img>
                    <Navbar />
                    </div>
                    <div className='col offset-2 two'>
                        <Routes>
                            <Route exact path='/' element={<Dashboard />} />
                            <Route exact path='/editor' element={<Editor/>} />
                            <Route exact path='/export' element={<DataExport />} />
                            <Route exact path='/backup' element={<Backup />} />
                            <Route exact path='/help' element={<Help/>} />
                        </Routes>
                    </div>
                </div>
            </div>
        </HashRouter>
    )
}
export default App