function PrintSelected() {

    const [basketballdata, setBasketballdata] = React.useState([]);
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    const today = month + '/' + day + '/' + year;

    React.useEffect(async () => {
        window.getSelectedApi.getData()
        .then((response) => {
            console.log(response);
            setBasketballdata(response);
        })  
        .catch((error) => {
            console.error(error);
          });
    },[])
    
    return (
        <div className="price-menu">
            <img src='./images/dplogo.png' className='dplogo img-fluid' />
            <img src='./images/socials.png' className='socials img-fluid'/>
            <h2>Basketball Products Price List</h2>
            <table className='table table-light table-striped'>
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Our Price</th>
                        <th scope="col">Competitors</th>
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
                                    </tr>
                                </>  
                            )
                        })
                    }
                </tbody>
            </table>
            printed on: {today}
        </div> 
    )
}

ReactDOM.render( <PrintSelected />, document.getElementById('root'));