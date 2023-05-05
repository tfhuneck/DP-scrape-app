import '../index.css';
import Card from './Component'
import TerminalController from './Console';
import Console from './Console'
import DataDisplay from './DataDisplay';

function Dashboard() {
    return (
        <>
        <Card
            class="dashboard"
            header="DASHBOARD"
            body={(
                <>
                    <div className="btn-group">
                        <button type="button" className="btn btn-outline-dark">Scrape Basektball</button>
                        <button type="button" className="btn btn-outline-dark">Scrape Baseball</button>
                        <button type="button" className="btn btn-outline-dark">Scrape Footbal</button>
                        <button type="button" className="btn btn-outline-dark">Scrape Other</button>
                    </div><br/><br/>
                    <button className='btn btn-outline-danger'>Run All Scrapes</button>
                </>
            )}
        />
        <br/>
            <Card 
                class="editor overflow-x-scroll"
                header="PRICE DATA"
                body={(<DataDisplay/>)}
            />
        </>
    )
}

export default Dashboard;