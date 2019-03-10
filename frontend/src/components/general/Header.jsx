import React, { Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Header.css';

class Header extends React.Component {
    
    render() {
        return (
            <nav className="Header">
                <ul className="list">
                    <li><Link to="/"><img src={ require('../../images/travel.png')} id="siteLogo" alt="travel logo" height="70" width="70" /></Link></li>
                    
                    {
                        this.props.username ?
                        (<Fragment>
                            <li ><Link to="/profile" className="profileLink" >Hello {this.props.username}!</Link></li>
                            <li ><Link to="#" onClick={this.props.logoutUser} >Logout</Link></li>
                        </Fragment>) :
                        (<Fragment>
                            <li ><NavLink to="/login" activeClassName="selected">Login</NavLink></li>
                            <li ><NavLink to="/register" activeClassName="selected">Register</NavLink></li>
                        </Fragment>)
                    }
                    
                </ul>
            </nav>
        )
    }
    
}

export default Header;
