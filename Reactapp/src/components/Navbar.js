import '../index.css';
import { Link } from 'react-router-dom'

 
function Navbar() {

    return (
        <>
            <nav>
            <Link to="/">
                    <button class="btn btn-outline-secondary navbtn"> 
                        <div class="translate"></div> 
                        <a>Dashboard</a>
                    </button>
            </Link>
            <Link to="/entry">
                <button class="btn btn-outline-secondary navbtn">
                    <div class="translate"></div> 
                    <a>Data Editor</a>
                </button>
            </Link>
            <Link to="/export">
                <button class="btn btn-outline-secondary navbtn">
                    <div class="translate"></div> 
                    <a>Export</a>
                </button>
            </Link> 
            <Link to="#">   
                <button class="btn btn-outline-secondary navbtn">
                    <div class="translate"></div> 
                    <a>Backup & Recover</a>
                </button>
            </Link> 
            <Link to="#">
                <button class="btn btn-outline-secondary navbtn">
                    <div class="translate"></div> 
                    <a>Help</a>
                </button>
            </Link> 
            </nav>
        </>
    )
}

export default Navbar; 
