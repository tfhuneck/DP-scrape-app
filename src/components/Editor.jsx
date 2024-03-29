import '../index.css';
import Card from './Component';
import DataEditor from './DataEditor';
import { useState, useEffect } from 'react';

function Editor() {
const [editData, setEditData] = useState([]);

useEffect(() => {
    console.log(editData)
    document.getElementById('pname').value = editData.map((i) => {return i.name});
    document.getElementById('dandp').value = editData.map((i) => {return i.dandp});
    document.getElementById('blowout').value = editData.map((i) => {return i.blowout});
    document.getElementById('dave').value = editData.map((i) => {return i.dave});
    document.getElementById('steel').value = editData.map((i) => {return i.steel});
    document.getElementById('rbi').value = editData.map((i) => {return i.rbi});
       
},[editData, setEditData])
    
//=======Function that sends data via Bridge to electron.js to be saved to data.json=========
    const dataSend = (event)=> {
        event.preventDefault();
        const select = document.getElementById('type');
        const warning = document.getElementById('warning');
        if(select.value === '' ){
            warning.style.display = 'block';
            return 
        }
        let product = {
            name: document.getElementById('pname').value,
            dandp: document.getElementById('dandp').value,
            blowout: document.getElementById('blowout').value,
            dave: document.getElementById('dave').value,
            steel: document.getElementById('steel').value,
            rbi: document.getElementById('rbi').value
        };
        console.log(product);

        if(document.getElementById('type').value === 'Basketball') {
            window.saveBasketballApi.saveData(product);
        }
        if(document.getElementById('type').value === 'Baseball') {
            window.saveBaseballApi.saveData(product);
        }
        if(document.getElementById('type').value === 'Football') {
            window.saveFootballApi.saveData(product);
        }
        if(document.getElementById('type').value === 'Other') {
            window.saveOtherApi.saveData(product);
        }
        // alert('Entry Submitted');
        sessionStorage.setItem('alerts', JSON.stringify({"page": "Editor","message":`${product.name} has been added to the database`,"id":"added"}));
        window.location.reload();
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
                            <div id='warning'>! Select Sport Category to Submit Data !</div><br />
                            <button id='entrysubmit' type='submit' onClick={dataSend} className='btn btn-outline-danger'>Submit</button>
                        </form>
                        <br/>
                    </>
                )}
            />
            <br/>
            <Card 
                class="editor overflow-x-scroll"
                header="DATA EDITOR"
                body={(<DataEditor setEditData={setEditData}/>)}
            />
        </> 
    )
}

export default Editor;