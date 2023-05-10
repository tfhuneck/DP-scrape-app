import { useState, useEffect } from 'react';

const table = (dataset, title) => {
    return (
        <>
        <h1>{title}</h1>
        <table className='table table-dark table-striped table-hover'>
            <thead>
                <tr>
                    <th scope="col">Product Name</th>
                    <th scope="col">D&P</th>
                    <th scope="col">Blowout</th>
                    <th scope="col">Dave&Adams</th>
                    <th scope="col">Steel City</th>
                    <th scope="col">Rbi Cru7</th>
                </tr>
            </thead>
            <tbody>
            {dataset.map((data, key) => {
                return (
                    <>
                    <tr key={key}>
                        <td className='pname'>{data.name}</td>
                        <td className='data-list'>{data.dandp}</td>
                        <td className='data-list'>{data.blowout}</td>
                        <td className='data-list'>{data.dave}</td>
                        <td className='data-list'>{data.steel}</td>
                        <td className='data-list'>{data.rbi}</td>
                    </tr>
                    </>  
                )
            })}
            </tbody>
        </table> 
        </>
    )
}


function DataDisplay() {
    const [basketballdata, setBasketballdata] = useState([]);
    const [baseballdata, setBaseballdata] = useState([]);
    const [footballdata, setFootballdata] = useState([]);
    const [otherdata, setOtherdata] = useState([]);
    const [displayTable, setDisplayTable] = useState('Basketball');

    const changeTable = (e) => {
        let choice = e.target.innerHTML;
        console.log(choice);
        setDisplayTable(choice);
    }
    useEffect(() => {
        window.getBasketballPriceApi.getData()
        .then((response) => {
            console.log(response);
            setBasketballdata(response);
        })  
        .catch((error) => {
            console.error(error);
          });
    },[])

    useEffect(() => {
        window.getBaseballPriceApi.getData()
        .then((response) => {
            console.log(response);
            setBaseballdata(response);
        })  
        .catch((error) => {
            console.error(error);
          });
    },[])

    useEffect(() => {
        window.getFootballPriceApi.getData()
        .then((response) => {
            console.log(response);
            setFootballdata(response);
        })  
        .catch((error) => {
            console.error(error);
          });
    },[])

    useEffect(() => {
        window.getOtherPriceApi.getData()
        .then((response) => {
            console.log(response);
            setOtherdata(response);
        })  
        .catch((error) => {
            console.error(error);
          });
    },[])

    const BasketballTable = () => {
        if (displayTable === 'Basketball'){
            return table(basketballdata, 'Basketball');
        } else {
            return
        };
    } 
    const BaseballTable = () => {
        if (displayTable === 'Baseball') {
          return table(baseballdata, 'Baseball');
        } else {
            return
        };
    } 
    const FootballTable = () => {
        if (displayTable === 'Football') {
           return table(footballdata, 'Football');
        } else {
            return
        };
    } 
    const OtherTable = () => {
        if (displayTable === 'Other') {
            return table(otherdata, 'Other');
        } else {
            return
        };
    } 

    return (
        <>
            <div className='container-fluid'>
                    <div className="btn-group">
                            <button onClick={changeTable} className="btn btn-dark">Basketball</button>
                            <button onClick={changeTable} className="btn btn-dark">Baseball</button>
                            <button onClick={changeTable} className="btn btn-dark">Football</button>
                            <button onClick={changeTable} className="btn btn-dark">Other</button>
                    </div>
                <br/><br/>
                <BasketballTable/>
                <BaseballTable/>
                <FootballTable/>
                <OtherTable/>
            </div>  
        </>
    )
}

export default DataDisplay;