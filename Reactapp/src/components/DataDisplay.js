import { basketballdata } from '../basketballdata';

function DataDisplay() {

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col data-headers'>Product Name</div>
                    <div className='col data-headers'>D&P Price</div>
                    <div className='col data-headers'>Blowout Price</div>
                    <div className='col data-headers'>Dave&Adams Price</div>
                    <div className='col data-headers'>Steel City Price</div>
                    <div className='col data-headers'>Rbi Cru7 Price</div>
                </div>
                <div className='row'>
                   <div className='data col'>
                    {basketballdata.map((data, key) => {
                        return (<div key={key}>{data.name}</div>)
                    })}
                   </div>
                   <div className='data col'>
                    {basketballdata.map((data, key) => {
                        return (<div key={key}>{data.prices.dandp}</div>)
                    })}
                   </div>
                   <div className='data col'>
                    {basketballdata.map((data, key) => {
                        return (<div key={key}>{data.prices.blowout}</div>)
                    })}
                   </div>
                   <div className='data col'>
                    {basketballdata.map((data, key) => {
                        return (<div key={key}>{data.prices.dave}</div>)
                    })}
                   </div>
                   <div className='data col'>
                    {basketballdata.map((data, key) => {
                        return (<div key={key}>{data.prices.steel}</div>)
                    })}
                   </div>
                   <div className='data col'>
                    {basketballdata.map((data, key) => {
                        return (<div key={key}>{data.prices.rbi}</div>)
                    })}
                   </div>
                </div>
            </div>
        </>
    )
}

export default DataDisplay;