import '../index.css';
import Card from './Component'
import DataDisplay from './DataDisplay';

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
        header="Data Export"
        body={(
            <>
            <div className='container-fluid'></div>
            <button onClick={printBasketball} className='btn btn-outline-dark'>Print Basketball Data</button>
            <button onClick={printBaseball} className='btn btn-outline-dark'>Print Baseball Data</button>
            <button onClick={printFootball} className='btn btn-outline-dark'>Print Football Data</button>
            <button onClick={printOther} className='btn btn-outline-dark'>Print Other Data</button>
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

export default DataExport;