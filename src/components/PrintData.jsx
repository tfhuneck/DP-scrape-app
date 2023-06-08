import '../index.css';
import Card from './Component'
import DataDisplay from './DataDisplay';
import PrintSelector from './PrintSelector';

function DataExport() {

    // =============Export PDF Data===============
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

    // ===============Export to CSV==============
    const printBasketballCsv = () => {
        window.printBasketballCsvApi.printData()
    }
    const printBaseballCsv = () => {
        window.printBaseballCsvApi.printData()
    }
    const printFootballCsv = () => {
        window.printFootballCsvApi.printData()
    }
    const printOtherCsv = () => {
        window.printOtherCsvApi.printData()
    }

    return (
        <>
         <Card
        class="dashboard"
        header="DATA PRINT EXPORT"
        title="Export Full Price Data Lists"
        body={(
            <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <button onClick={printBasketball} className='print btn btn-outline-danger'>Export Basketball Prices PDF</button><br />
                        <button onClick={printBaseball} className='print btn btn-outline-danger'>Export Baseball Prices PDF</button><br />
                        <button onClick={printFootball} className='print btn btn-outline-danger'>Export Football Prices PDF</button><br />
                        <button onClick={printOther} className='print btn btn-outline-danger'>Export Other Prices PDF</button><br />
                    </div>
                    <div className='col'>
                        <button onClick={printBasketballCsv} className='print btn btn-outline-success'>Export Basketball Prices CSV</button><br />
                        <button onClick={printBaseballCsv} className='print btn btn-outline-success'>Export Baseball Prices CSV</button><br />
                        <button onClick={printFootballCsv} className='print btn btn-outline-success'>Export Football Prices CSV</button><br />
                        <button onClick={printOtherCsv} className='print btn btn-outline-success'>Export Other Prices CSV</button><br />
                    </div>
                </div>
            </div>
            </>
        )}
        />
        <br/>
            <Card 
                class="editor overflow-x-scroll" CSV
                header="PRINT PRICE DATA SELECTOR"
                title="Select the Products you want to print"
                body={(<PrintSelector/>)}
            />
        </>
    )
}

export default DataExport;