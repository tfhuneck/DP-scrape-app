function PrintOther() {

    const [otherdata, setOtherdata] = React.useState([]);
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    const today = month + '/' + day + '/' + year;

    React.useEffect(() => {
        window.getOtherPriceApi.getData()
        .then((response) => {
            console.log(response);
            setOtherdata(response);
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
        window.saveOtherCsvApi.sendCsv(csv_data);
    };
  
    const tableRef = React.useRef(null);
  
    React.useEffect(() => {
      if (tableRef.current) {
        setTimeout(makeCsv, 2000);
      }
    }, [tableRef]);

    return (
        <>
        <h4>Other Price Data</h4>
        printed on: {today}
        <table ref={tableRef} className='table table-light table-striped'>
            <thead>
                <tr>
                    <th scope="col">Product Name</th>
                    <th scope="col">DandP</th>
                    <th scope="col">Blowout</th>
                    <th scope="col">Dave Adams</th>
                    <th scope="col">Steel City</th>
                    <th scope="col">Rbi Cru7</th>
                </tr>
            </thead>
            <tbody>
                {otherdata.map((data, key) => {
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
    );
}

ReactDOM.render( <PrintOther />, document.getElementById('root'));