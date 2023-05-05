import { basketballdata } from '../basketballdata';

function DataDisplay() {

    return (
        <>
            <div className='container-fluid'>
                <div className="btn-group">
                        <button type="button" className="btn btn-dark">Basektball</button>
                        <button type="button" className="btn btn-dark">Baseball</button>
                        <button type="button" className="btn btn-dark">Footbal</button>
                        <button type="button" className="btn btn-dark">Other</button>
                </div>
                <br/><br/>
                <div className='row'>
                    <table className='table table-dark table-striped table-hover'>
                        <thead>
                            <tr>
                                <th scope="col" className='data-list pname'>Product Name</th>
                                <th scope="col" className='data-list'>D&P</th>
                                <th scope="col" className='data-list'>Blowout</th>
                                <th scope="col" className='data-list'>Dave&Adams</th>
                                <th scope="col" className='data-list'>Steel City</th>
                                <th scope="col" className='data-list'>Rbi Cru7</th>
                            </tr>
                        </thead>
                        <tbody>
                        {basketballdata.map((data, key) => {
                            return (
                                <>
                                <tr key={key}>
                                    <td className='pname'>{data.name}</td>
                                    <td>{data.prices.dandp}</td>
                                    <td>{data.prices.blowout}</td>
                                    <td>{data.prices.dave}</td>
                                    <td>{data.prices.steel}</td>
                                    <td>{data.prices.rbi}</td>
                                </tr>
                                </>  
                            )
                        })}
                        </tbody>
                    </table> 
                </div>
            </div>
        </>
    )
}

export default DataDisplay;