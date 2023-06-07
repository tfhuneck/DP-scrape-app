import dplogo from '../images/dplogo.png';
import { useState, useEffect} from 'react';
var getAlerts = JSON.parse(sessionStorage.getItem('alerts'));

function Alert({page, message, id}) {

    const close = () => {
        sessionStorage.removeItem('alerts');
    }
    return (
        <>
            <div className="toast show" id={id} role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <img src={dplogo} height='20px' width='20px'/>
                    <strong>{page}</strong>  
                    <button onClick={close} type="button" className="btn-close me-1 m-auto" data-bs-dismiss="toast" aria-label="Close" />
                </div>
                <div className="toast-body">
                    {message}
                </div>
            </div>
        </>
    );
};

function Alerts() {
    const [ alerted, setAlerted ] = useState([]);
    var alerts = [];
    
    useEffect(() =>{
        if(getAlerts) {
            alerts.push(getAlerts);
            setAlerted(alerts);
        }
    }, [])
    

    return (
        <>
            <div className="toast-container position-fixed top-0 end-0 p-3">
                {alerted.map((i) => {
                    return(
                        <Alert page={i.page} message={i.message} id={i.id}/>
                    )
                })}
            </div>
        </>
    )
}

export default Alerts; 

