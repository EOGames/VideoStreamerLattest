import React from "react";
import {Link} from 'react-router-dom';


const Topbar = () => {
    const auth = localStorage.getItem('admin');

    function LogOut()
    {      
        localStorage.clear();
        window.location.href = '/';
        // navigate('/'); 
    }
    return (
        <div className="topbar">

            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/movies'}>Movies</Link></li>
                <li><Link to={'/shows'}>Shows</Link></li>

                {
                    auth ?
                        <>
                            <li><Link to={'/moviedatabase'}>Movie Database</Link></li>
                            <li><Link to={'/showdatabase'}>Show Database</Link></li>
                            <li><Link onClick={LogOut} to={'/'}>Logout</Link></li>
                        </>
                        :
                        <>
                            <li><Link to={'/login'}>Login</Link></li>
                        </>
                }

            </ul>
        </div>
    );
}
export default Topbar;