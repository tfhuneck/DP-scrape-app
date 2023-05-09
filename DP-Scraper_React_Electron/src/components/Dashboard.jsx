import '../index.css';
import Card from './Component'
import TerminalController from './Console';
import Console from './Console'
import DataDisplay from './DataDisplay';
import Loading from './Loading';

function Dashboard() {

    function scrapeBasketball(){
        window.scrapebasketball.scrape()
        return
    }

    return (
        <>
        <Card
            class="dashboard"
            header="DASHBOARD"
            text={(<Loading/>)}
            body={(
                <>
                    {/* <div className="btn-group"> */}
                        <button type='button' className='btn btn-outline-danger scrp'>Run All Scrapes</button><br/>
                        <button onClick={scrapeBasketball} type="button" className="btn btn-outline-dark scrp">Scrape Basketball Prices</button><br/>
                        <button type="button" className="btn btn-outline-dark scrp">Scrape Baseball Prices</button><br/>
                        <button type="button" className="btn btn-outline-dark scrp">Scrape Football Prices</button><br/>
                        <button type="button" className="btn btn-outline-dark scrp">Scrape Other Prices</button>  
                    {/* </div> */}
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