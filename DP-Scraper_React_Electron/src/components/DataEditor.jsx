import { basketballdata } from '../basketballdata';
import { useState, useEffect } from 'react';


function DataEditor() {
    

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <table className='table table-light table-striped table-hover'>
                        <thead>
                            <tr>
                                <th scope="col">Product Name</th>
                                <th scope="col">D&P</th>
                                <th scope="col">Blowout</th>
                                <th scope="col">Dave&Adams</th>
                                <th scope="col">Steel City</th>
                                <th scope="col">Rbi Cru7</th>
                                <th scope="col">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                        {basketballdata.map((data, key) => {
                            return (
                                <>
                                <tr key={key}>
                                    <td className='pname'>{data.name}</td>
                                    <td className='data-list'>{data.dandp}</td>
                                    <td className='data-list'>{data.blowout}</td>
                                    <td className='data-list'>{data.dave}</td>
                                    <td className='data-list'>{data.steel}</td>
                                    <td className='data-list'>{data.rbi}</td>
                                    <td className='data-edit'>
                                        <button className="btn btn-sm btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown">Edit</button>
                                        <ul className="dropdown-menu">
                                            <li><a key="edit" className="dropdown-item">Edit</a></li>
                                            <li><a key="delete" className="dropdown-item link-danger">Delete</a></li>
                                        </ul>
                                    </td>
                                </tr>
                                </>  
                            )
                        })}
                        </tbody>
                    </table> 
                </div>
            </div>
        </>
    )
}

export default DataEditor;

