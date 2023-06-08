import { useState, useEffect } from 'react';
import Table from './Tabeledit'
const activeTable = JSON.parse(sessionStorage.getItem('table'));

function DataEditor({setEditData}) {
    const [basketballdata, setBasketballdata] = useState([]);
    const [baseballdata, setBaseballdata] = useState([]);
    const [footballdata, setFootballdata] = useState([]);
    const [otherdata, setOtherdata] = useState([]);
    const [displayTable, setDisplayTable] = useState('Basketball');

    useEffect(() => {
        if(activeTable){setDisplayTable(activeTable);}
        }, []);
    
    useEffect(() => {
        sessionStorage.setItem('table', JSON.stringify(displayTable));
        }, [displayTable]);

    useEffect(() => {
        const basketballBtn = document.getElementById('basketballbtn')
        const baseballBtn = document.getElementById('baseballbtn')
        const footballBtn = document.getElementById('footballbtn')
        const otherBtn = document.getElementById('otherbtn')
        if (basketballBtn.innerHTML === displayTable){
            basketballBtn.className = 'btn btn-outline-dark active'
        }else{
            basketballBtn.className = 'btn btn-outline-dark'
        }
        if (baseballBtn.innerHTML === displayTable){
            baseballBtn.className = 'btn btn-outline-dark active'
        }else{
            baseballBtn.className = 'btn btn-outline-dark'
        }
        if (footballBtn.innerHTML === displayTable){
            footballBtn.className = 'btn btn-outline-dark active'
        }else{
            footballBtn.className = 'btn btn-outline-dark'
        }
        if (otherBtn.innerHTML === displayTable){
            otherBtn.className = 'btn btn-outline-dark active'
        }else{
            otherBtn.className = 'btn btn-outline-dark'
        }
    }, [displayTable]);
    

    function refreshPage() {
        window.location.reload(false);
      }

    const changeTable = (e) => {
        let choice = e.target.innerHTML;
        console.log(choice);
        setDisplayTable(choice);
    }
    //=========Fetch data from json files=========
    useEffect(() => {
        window.getBasketballApi.getData()
        .then((response) => {
            console.log(response);
            setBasketballdata(response);
        })  
        .catch((error) => {
            console.error(error);
          });
    },[])
    useEffect(() => {
        window.getBaseballApi.getData()
        .then((response) => {
            console.log(response);
            setBaseballdata(response);
        })  
        .catch((error) => {
            console.error(error);
          });
    },[])
    useEffect(() => {
        window.getFootballApi.getData()
        .then((response) => {
            console.log(response);
            setFootballdata(response);
        })  
        .catch((error) => {
            console.error(error);
          });
    },[])
    useEffect(() => {
        window.getOtherApi.getData()
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
                    <Table dataset={basketballdata} setEditData={setEditData} title='Basketball'/>
              )
        } else {
            return
        };
    } 
    const BaseballTable = () => {
        if (displayTable === 'Baseball') {
          return (
                <Table dataset={baseballdata} setEditData={setEditData} title='Baseball'/>
          )
        } else {
            return
        };
    } 
    const FootballTable = () => {
        if (displayTable === 'Football') {
           return (
                <Table dataset={footballdata} setEditData={setEditData} title='Football'/>
          )
        } else {
            return
        };
    } 
    const OtherTable = () => {
        if (displayTable === 'Other') {
            return (
                    <Table dataset={otherdata} setEditData={setEditData} title='Other'/>
              )
        } else {
            return
        };
    } 
    
    return (
        <>
            <div className='container-fluid'>
                <div className="btn-group">
                        <button id='basketballbtn' onClick={changeTable} className="btn btn-outline-dark">Basketball</button>
                        <button id='baseballbtn' onClick={changeTable} className="btn btn-outline-dark">Baseball</button>
                        <button id='footballbtn' onClick={changeTable} className="btn btn-outline-dark">Football</button>
                        <button id='otherbtn' onClick={changeTable} className="btn btn-outline-dark">Other</button>
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

export default DataEditor;

