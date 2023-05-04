import '../index.css';
import { Link } from 'react-router-dom'

 
function Navbar() {

    return (
        <>
            <nav>
            <Link to="/">
                    <button className="btn btn-outline-secondary navbtn"> 
                        <div className="translate"></div> 
                        <div className='navbtntext'>Dashboard</div>
                    </button>
            </Link>
            <Link to="/entry">
                <button className="btn btn-outline-secondary navbtn">
                    <div className="translate"></div> 
                    <div className='navbtntext'>Data Editor</div>
                </button>
            </Link>
            <Link to="/export">
                <button className="btn btn-outline-secondary navbtn">
                    <div className="translate"></div> 
                    <div className='navbtntext'>Export</div>
                </button>
            </Link> 
            <Link to="#">   
                <button className="btn btn-outline-secondary navbtn">
                    <div className="translate"></div> 
                    <div className='navbtntext'>Backup & Recover</div>
                </button>
            </Link> 
            <Link to="#">
                <button className="btn btn-outline-secondary navbtn">
                    <div className="translate"></div> 
                    <div className='navbtntext'>Help</div>
                </button>
            </Link> 
            </nav>
        </>
    )
}

export default Navbar; 
