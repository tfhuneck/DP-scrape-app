import '../index.css';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
var activeState = JSON.parse(sessionStorage.getItem('active'));

 
function Navbar() {
    const [active, setActive] = useState('dashboard')

    useEffect(() => {
        if(activeState){setActive(activeState);}
        }, []);
    
    useEffect(() => {
        sessionStorage.setItem('active', JSON.stringify(active));
        }, [active]);

    const Navbutton = ({id, to, title}) => {
        const classes = () => {
            const clss = (id === active) ? ' active' : '';
            return 'btn btn-outline-dark navbtn' + clss;
        }
    const handleClick = (event) => {
        let select = event.target.id;
        setActive(select);
        console.log(`active state updated to ${select}`); 
    }
        return(
            <NavLink to={to}>
                    <button className={classes()}> 
                        <div className="translate"></div> 
                        <div className='navbtntext'id={id} onClick={handleClick}>{title}</div>
                    </button>
            </NavLink>
        )
    }

    return (
        <>
            <nav>
                <Navbutton
                    title='Dashboard'
                    id='dashboard'
                    to='/'
                /> 
                <Navbutton
                    title='Data Editor'
                    id='editor'
                    to="/editor"
                /> 
                <Navbutton
                    title='Print Prices'
                    id='export'
                    to="/export"
                /> 
                <Navbutton
                    title='Data Backup'
                    id='backup'
                    to="/backup"
                /> 
                <Navbutton
                    title='Help'
                    id='help'
                    to="/help"
                /> 
            </nav>
        </>
    )
}

export default Navbar; 
