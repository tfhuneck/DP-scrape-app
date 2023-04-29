import { basketballdata } from '../basketballdata';

function DataEditor() {

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-3 data-headers'>Product Name</div>
                    <div className='col data-headers'>D&P Price</div>
                    <div className='col data-headers'>Blowout Price</div>
                    <div className='col data-headers'>Dave&Adams Price</div>
                    <div className='col data-headers'>Steel City Price</div>
                    <div className='col data-headers'>Rbi Cru7 Price</div>
                    <div className='col data-headers'>Edit</div>
                </div>
                <div className='row'>
                   <div className='data col-3'>
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
                   <div className='data col'>
                    {basketballdata.map((data, key) => {
                        return (<div key={key}><button className="btn btn-sm btn-outline-info dropdown-toggle">Edit</button></div>)
                    })}
                   </div>
                </div>
            </div>
        </>
    )
}

export default DataEditor;