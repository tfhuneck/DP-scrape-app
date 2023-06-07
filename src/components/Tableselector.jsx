import { useState, useEffect } from 'react';
import Pagination from './Pagination';


const Checkbox = ({ id, type, name, handleClick, isChecked }) => {
    return (<input id={id} name={name} type={type} onChange={handleClick} checked={isChecked}/>);
};

const Table = ({dataset, title,}) => {
    const [searchValue, setSearchValue] = useState('');
    const [filteredData, setFilteredData] = useState(dataset)
    const [currentPage, setCurrentPage] = useState(1);   
    const [recordsPerPage] = useState(15);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;  
    const currentRecords = filteredData.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(filteredData.length / recordsPerPage);
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);

    useEffect(() => {
        if (searchValue) {
            let filtered = dataset.filter((data) => {
                    return data.name.toString().toLowerCase().includes(searchValue.toLowerCase()) 
                 })
            // console.log(searchValue)
            // console.log(filtered)
            // console.log(filteredData)
            setFilteredData(filtered);
        }else {
        setFilteredData(dataset)
        };
    },[searchValue, dataset]);

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    }
   
    const handleSelectAll = e => {
        setIsCheckAll(!isCheckAll);
        let allChecks = dataset.map((data) => data.name)
        // console.log(allChecks);
        setIsCheck(allChecks)
        if (isCheckAll) {
        setIsCheck([]);
        }
    };

    const handleClick = e => {
        const { id, checked } = e.target;
        setIsCheck([...isCheck, id]);
        if (!checked) {
        setIsCheck(isCheck.filter(item => item !== id));
        }
        console.log(isCheck);
    }; 
    
    const printSelected = (e) => {
        if(document.getElementById('title').innerText === 'Basketball') {
            window.printSelectedBasketballApi.printData(e, isCheck);
        }
        if(document.getElementById('title').innerText === 'Baseball') {
            window.printSelectedBaseballApi.printData(e, isCheck);
        }
        if(document.getElementById('title').innerText === 'Football') {
            window.printSelectedFootballApi.printData(e, isCheck);
        }
        if(document.getElementById('title').innerText === 'Other') {
            window.printSelectedOtherApi.printData(e, isCheck);
        };
    }

    return (
        <>
        <div className="search">
        <button onClick={printSelected} className='btn btn-outline-danger'>Export Selected PDF</button> &nbsp; &nbsp;
        <button onClick={printSelected} className='btn btn-outline-success'>Export Selected CSV</button> &nbsp; &nbsp;
            <input className="form-control search" type="text" placeholder="Search Products" value={searchValue} onChange={handleSearch}/>
        </div>
        <h1 id='title'>{title}</h1>
        <table className='table table-secondary table-striped table-hover'>
            <thead>
                <tr>
                <th>
                    <Checkbox
                        type="checkbox"
                        name="selectAll"
                        id="selectAll"
                        handleClick={handleSelectAll}
                        isChecked={isCheckAll}
                    />
                        &nbsp; All
                    </th>
                    <th scope="col">Product Name</th>
                    <th scope="col">D&P</th>
                    <th scope="col">Blowout</th>
                    <th scope="col">Dave&Adams</th>
                    <th scope="col">Steel City</th>
                    <th scope="col">Rbi Cru7</th>
                </tr>
            </thead>
            <tbody>
                {currentRecords.map((data, key) => {
                        return (
                            <>
                                <tr key={key}>
                                    <td>
                                        <Checkbox
                                            type="checkbox"
                                            id={data.name}
                                            handleClick={handleClick}
                                            isChecked={isCheck.includes(data.name)}
                                        />
                                         
                                    </td>
                                    <td className='pname'>{data.name}</td>
                                    <td className='data-list'>{data.dandp}</td>
                                    <td className='data-list'>{data.blowout}</td>
                                    <td className='data-list'>{data.dave}</td>
                                    <td className='data-list'>{data.steel}</td>
                                    <td className='data-list'>{data.rbi}</td>
                                    
                                </tr>
                            </>  
                        )
                    })
                }
            </tbody>
        </table> 
        <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </>
    )
}

export default Table