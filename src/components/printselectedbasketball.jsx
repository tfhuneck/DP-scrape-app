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

    const makeCsv = () => {
        var csv_data = [];
        var rows = tableRef.current.getElementsByTagName("tr");
        console.log(rows);
        for (var i = 0; i < rows.length; i++) {
            var cols = rows[i].querySelectorAll("th, td");
            console.log(cols);
            var csvrow = [];
            for (var n = 0; n < cols.length; n++) {
            csvrow.push(cols[n].innerHTML);
            }
            csv_data.push(csvrow.join(","));
        }
        csv_data = csv_data.join("\n");
        console.log(csv_data);
        window.selectedBasketballCsvApi.sendCsv(csv_data);
    };
  
    const tableRef = React.useRef(null);
  
    React.useEffect(() => {
      if (tableRef.current) {
        setTimeout(makeCsv, 2000);
      }
    }, [tableRef]);
    
    return (
        <div className="price-menu">
            <img src='./images/dplogo.png' className='dplogo img-fluid' />
            <img src='./images/socials.png' className='socials img-fluid'/>
            <h2>Basketball Products Price List</h2>
            <table ref={tableRef} className='table table-light table-striped'>
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