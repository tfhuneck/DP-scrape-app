import '../index.css';
import Card from './Component'
import DataDisplay from './DataDisplay';
import PrintSelector from './PrintSelector';

function DataExport() {

    const printBasketball = () => {
        window.printBasketballApi.printData()
    }
    const printBaseball = () => {
        window.printBaseballApi.printData()
    }
    const printFootball = () => {
        window.printFootballApi.printData()
    }
    const printOther = () => {
        window.printOtherApi.printData()
    }

    return (
        <>
         <Card
        class="dashboard"
        header="DATA PRINT EXPORT"
        title="Export Full Price Lists to PDF"
        body={(
            <>
            <div className='container-fluid'></div>
            <button onClick={printBasketball} className='btn btn-outline-dark'>Export Basketball Price Data</button>
            <button onClick={printBaseball} className='btn btn-outline-dark'>Export Baseball Price Data</button>
            <button onClick={printFootball} className='btn btn-outline-dark'>Export Football Price Data</button>
            <button onClick={printOther} className='btn btn-outline-dark'>Export Other Price Data</button>
            </>
        )}
        />
        <br/>
            <Card 
                class="editor overflow-x-scroll"
                header="PRINT PRICE DATA SELECTOR"
                title="Select the Products you want to print"
                body={(<PrintSelector/>)}
            />
        </>
    )
}

export default DataExport;