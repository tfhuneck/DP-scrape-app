import '../index.css';
import Card from './Component'
import TerminalController from './Console';
import Console from './Console'

function Dashboard() {
    return (
        <Card
            class="dashboard"
            header="DASHBOARD"
            body={(
                <>
                    <button className='btn btn-outline-secondary'>Run Scrape</button>
                    {/* <Console/> */}
                </>
            )}
        />
    )
}

export default Dashboard;