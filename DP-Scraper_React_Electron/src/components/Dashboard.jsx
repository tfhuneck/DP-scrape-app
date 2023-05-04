import '../index.css';
import Card from './Component'
import TerminalController from './Console';
import Console from './Console'
import { basketballdata } from '../basketballdata';
import DataDisplay from './DataDisplay';

function Dashboard() {
    return (
        <>
        <Card
            class="dashboard"
            header="DASHBOARD"
            body={(
                <>
                    <button className='btn btn-outline-danger'>Run All Scrapes</button><br/><br/>
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-info">Scrape Basektball</button>
                        <button type="button" className="btn btn-outline-info">Scrape Baseball</button>
                        <button type="button" className="btn btn-outline-info">Scrape Footbal</button>
                        <button type="button" className="btn btn-outline-info">Scrape Other</button>
                    </div>
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

export default Dashboard;