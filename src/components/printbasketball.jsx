function PrintBasketball() {

    const [basketballdata, setBasketballdata] = React.useState([]);
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    const today = month + '/' + day + '/' + year;

    React.useEffect(() => {
        window.getBasketballPriceApi.getData()
        .then((response) => {
            console.log(response);
            setBasketballdata(response);
        })  
        .catch((error) => {
            console.error(error);
          });
    },[])

    return (
        <>
        <h4>Basketball Price Data</h4>
        printed on: {today}
        <table className='table table-light table-striped'>
            <thead>
                <tr>
                    <th scope="col">Product Name</th>
                    <th scope="col">D&P</th>
                    <th scope="col">Blowout</th>
                    <th scope="col">Dave&Adams</th>
                    <th scope="col">Steel City</th>
                    <th scope="col">Rbi Cru7</th>
                </tr>
            </thead>
            <tbody>
                {basketballdata.map((data, key) => {
                        return (
                            <>
                                <tr key={key}>
                                    <td className='pname'>{data.name}</td>
                                    <td className='data-list'>{data.dandp}</td>
                                    <td className='data-list'>{data.blowout}</td>
                                    <td className='data-list'>{data.dave}</td>
                                    <td className='data-list'>{data.steel}</td>
                                    <td className='data-list'>{data.rbi}</td>
                                </tr>
                            </>  
                        )
                    })
                }
            </tbody>
        </table>
        </> 
    )
}

ReactDOM.render( <PrintBasketball />, document.getElementById('root'));