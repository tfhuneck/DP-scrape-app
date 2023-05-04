import '../index.css';
import Card from './Component';
import { basketballdata } from '../basketballdata';
import DataDisplay from './DataDisplay';


function Entry() {

    function onSubmit() {
        
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
                            <select className="form-select">
                                <option selected>Select Sport</option>
                                <option id="basketball" value="Basketball">Basketball</option>
                                <option id="baseball" value="Baseball">Baseball</option>
                                <option id="football" value="Football">Football</option>
                                <option id="other" value="Other">Other</option>
                            </select>
                            <label for="name">Enter Product Name</label>
                            <input id="name" placeholder='Product Name' className='form-control'/><br/>
                            Enter Product URLs
                            <input id='dandp' type="url" placeholder='D&P Cards url' className='form-control'/>
                            <input id='blowout' type="url" placeholder='Blowout Cards url' className='form-control'/>
                            <input id='dave' type="url" placeholder='Dave & Adams Cards url' className='form-control'/>
                            <input id='steel' type="url" placeholder='Steel City Cards url' className='form-control'/>
                            <input id='rbi' type="url" placeholder='RBI Cru7 Cards url' className='form-control'/>
                            <br/>
                            <input type='submit' className='btn btn-outline-danger'></input>
                        </form>
                    </>
                )}
            />
        <br/>
            <Card 
                class="editor overflow-x-scroll"
                header="DATA EDITOR"
                body={(<DataDisplay/>)}
            />
        </> 
    )
}

export default Entry;