import '../index.css';
import Card from './Component';
import { basketballdata } from '../basketballdata';
import DataEditor from './DataEditor';
import { useState, useEffect } from 'react'


function Entry() {
    
    // function handleSubmit(event) {
    //     event.preventDefault();
    // let btnsbmt = document.querySelector('#entrysubmit');
    // btnsbmt.addEventListener("click", (event, arg) => {
    // }
    
    const dataSend = (event)=> {
        event.preventDefault();
        // let newEntry = document.getElementById('pname').value;
            let newEntry = {
                name: document.getElementById('pname').value,
                dandp: document.getElementById('dandp').value,
                blowout: document.getElementById('blowout').value,
                dave: document.getElementById('dave').value,
                steel: document.getElementById('steel').value,
                rbi: document.getElementById('rbi').value
            };
            console.log(newEntry);
            // let newData = JSON.stringify(newEntry);
            // console.log(newData);

            window.Bridge.saveData(newEntry);
            alert('Entry Submitted');
        
    }

    return (
        <>
        <Card
            class="editor-input overflow-x-scroll"
            header="DATA ENTRY"
            text=""
            body={(
                <>
                    <form>
                        <select id="type" required className="form-select">
                            <option value="">Select Sport</option>
                            <option id="basketball" value="Basketball">Basketball</option>
                            <option id="baseball" value="Baseball">Baseball</option>
                            <option id="football" value="Football">Football</option>
                            <option id="other" value="Other">Other</option>
                        </select>
                        <label>Enter Product Name</label>
                        <input id="pname" type='text' placeholder='Product Name' className='form-control' required /><br/>
                        Enter Product URLs
                        <input id='dandp' type="text" placeholder='D&P Cards url' className='form-control'/>
                        <input id='blowout' type="text" placeholder='Blowout Cards url' className='form-control'/>
                        <input id='dave' type="text" placeholder='Dave & Adams Cards url' className='form-control'/>
                        <input id='steel' type="text" placeholder='Steel City Cards url' className='form-control'/>
                        <input id='rbi' type="text" placeholder='RBI Cru7 Cards url' className='form-control'/>
                        <br/>
                        <button id='entrysubmit' onClick={dataSend} className='btn btn-outline-danger'>Submit</button>
                    </form>
                    <br/>
                </>
            )}
        />
        <br/>
        <Card 
            class="editor overflow-x-scroll"
            header="DATA EDITOR"
            body={(<DataEditor/>)}
        />
        </> 
    )
}

export default Entry;