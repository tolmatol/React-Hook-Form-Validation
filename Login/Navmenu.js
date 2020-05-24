import React from 'react';
import { NavLink, Link } from 'react-router-dom';
const Navmenu = () => {
    return (
        <div className="row  mt-3 mb-3">
            <div className="col-6">
                <Link to='/'><img src="https://tolmatol.com/wp-content/uploads/2020/04/tolmatol-logo-1.png" alt="tolmatol" width="120" /></Link>
            </div>
            <div className="col-6 text-right">
                <NavLink exact to="/"> Sign In </NavLink> |
        <NavLink to='/register/'>Register</NavLink>
            </div>
        </div>
    );
};
export default Navmenu;