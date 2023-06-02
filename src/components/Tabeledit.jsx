import { useState, useEffect } from 'react';
import Pagination from './Pagination';

const Table = ({dataset, title, setEditData}) => {
    const [searchValue, setSearchValue] = useState('');
    const [filteredData, setFilteredData] = useState(dataset)
    const [currentPage, setCurrentPage] = useState(1);   
    const [recordsPerPage] = useState(15);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;  
    const currentRecords = filteredData.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(filteredData.length / recordsPerPage)
    


    const editItem = (data) => {
        let filtered = dataset.filter((i) => {
            return i == data  
        })
        console.log(filtered);
        if(document.getElementById('title').innerText === 'Basketball') {
            window.deleteBasketballApi.deleteData(filtered);
        }
        if(document.getElementById('title').innerText === 'Baseball') {
            window.deleteBaseballApi.deleteData(filtered);
        }
        if(document.getElementById('title').innerText === 'Football') {
            window.deleteFootballApi.deleteData(filtered);
        }
        if(document.getElementById('title').innerText === 'Other') {
            window.deleteOtherApi.deleteData(filtered);
        };
        setEditData(filtered);
    }

    const deleteItem = (data) => {
        let filtered = dataset.filter((i) => {
            return i == data  
        })
        console.log(filtered)

        if(document.getElementById('title').innerText === 'Basketball') {
            window.deleteBasketballApi.deleteData(filtered);
        }
        if(document.getElementById('title').innerText === 'Baseball') {
            window.deleteBaseballApi.deleteData(filtered);
        }
        if(document.getElementById('title').innerText === 'Football') {
            window.deleteFootballApi.deleteData(filtered);
        }
        if(document.getElementById('title').innerText === 'Other') {
            window.deleteOtherApi.deleteData(filtered);
        };
        alert('Item deleted');
        window.location.reload(false);
    }

    useEffect(() => {
        if (searchValue) {
            let filtered = dataset.filter((data) => {
                    return data.name.toString().toLowerCase().includes(searchValue.toLowerCase()) 
                 })
            console.log(searchValue)
            console.log(filtered)
            console.log(filteredData)
            setFilteredData(filtered);
        }else {
        setFilteredData(dataset)
        };
    },[searchValue, dataset])

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    }
    return (
        <>
        <div className="search">
            <input className="form-control search" type="text" placeholder="Search Products" value={searchValue} onChange={handleSearch}/>
        </div>
        <h1 id='title'>{title}</h1>
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
            {currentRecords.map((data, key) => {
                return (
                    <>
                    <tr id={key} key={key}>
                        <td className='pname'>{data.name}</td>
                        <td className='data-list'>{data.dandp}</td>
                        <td className='data-list'>{data.blowout}</td>
                        <td className='data-list'>{data.dave}</td>
                        <td className='data-list'>{data.steel}</td>
                        <td className='data-list'>{data.rbi}</td>
                        <td className='data-edit'>
                            <button className="btn btn-sm btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown">Edit</button>
                            <ul className="dropdown-menu">
                                <li><a id={key} key="edit" onClick={() => editItem(data)} className="dropdown-item btn">Edit</a></li>
                                <li><a id={key} key="delete" onClick={() => deleteItem(data)} className="dropdown-item link-danger btn">Delete</a></li>
                            </ul>
                        </td>
                    </tr>
                    </>  
                )
            })}
            </tbody>
        </table> 
        <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </>
    )
}

export default Table