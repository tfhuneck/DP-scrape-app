import { useState, useEffect } from 'react';
import Table from './Tableselector';

function PrintSelector() {
    const [basketballdata, setBasketballdata] = useState([]);
    const [baseballdata, setBaseballdata] = useState([]);
    const [footballdata, setFootballdata] = useState([]);
    const [otherdata, setOtherdata] = useState([]);
    const [displayTable, setDisplayTable] = useState('Basketball');

    function refreshPage() {
        window.location.reload(false);
      }
    
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
            return (
                    <Table dataset={basketballdata} title='Basketball'/>
              )
        } else {
            return
        };
    } 
    const BaseballTable = () => {
        if (displayTable === 'Baseball') {
          return (
                <Table dataset={baseballdata} title='Baseball'/>
          )
        } else {
            return
        };
    } 
    const FootballTable = () => {
        if (displayTable === 'Football') {
           return (
                <Table dataset={footballdata} title='Football'/>
          )
        } else {
            return
        };
    } 
    const OtherTable = () => {
        if (displayTable === 'Other') {
            return (
                    <Table dataset={otherdata} title='Other'/>
              )
        } else {
            return
        };
    } 
    return (
        <>
        <br/>
            <div className='container-fluid'>
                    <div className="btn-group">
                            <button onClick={changeTable} className="btn btn-outline-dark">Basketball</button>
                            <button onClick={changeTable} className="btn btn-outline-dark">Baseball</button>
                            <button onClick={changeTable} className="btn btn-outline-dark">Football</button>
                            <button onClick={changeTable} className="btn btn-outline-dark">Other</button>
                    </div>
                    <button className='btn btn-outline-dark refresh' onClick={refreshPage}>Refresh Table</button>
                <br/><br/>
                <BasketballTable/>
                <BaseballTable/>
                <FootballTable/>
                <OtherTable/>
            </div>  
        </>
    )
}

export default PrintSelector;