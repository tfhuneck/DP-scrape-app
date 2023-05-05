import { basketballdata } from '../basketballdata';

function DataEditor() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <table className='table table-light table-striped table-hover'>
                        <thead>
                            <tr>
                                <th scope="col">Product Name</th>
                                <th scope="col">D&P</th>
                                <th scope="col">Blowout</th>
                                <th scope="col">Dave&Adams</th>
                                <th scope="col">Steel City</th>
                                <th scope="col">Rbi Cru7</th>
                                <th scope="col">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                        {basketballdata.map((data, key) => {
                            return (
                                <>
                                <tr key={key}>
                                    <td className='pname'>{data.name}</td>
                                    <td className='data-list'>{data.urls.dandp}</td>
                                    <td className='data-list'>{data.urls.blowout}</td>
                                    <td className='data-list'>{data.urls.dave}</td>
                                    <td className='data-list'>{data.urls.steel}</td>
                                    <td className='data-list'>{data.urls.rbi}</td>
                                    <td className='data-edit'>
                                        <button className="btn btn-sm btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown">Edit</button>
                                        <ul class="dropdown-menu">
                                            <li><a className="dropdown-item">Edit</a></li>
                                            <li><a className="dropdown-item link-danger">Delete</a></li>
                                        </ul>
                                    </td>
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

export default DataEditor;

