import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

    handleLogout = () => {
        this.props.clearUser();
        this.props.history.push('/');
    }

    render() {

        return (
            <header>
                <h1 className="site-title">RecordCollector<br />
                </h1>
                <nav>
                    <ul className="container">
                        <li><Link className="nav-link" to="/">Catalogue</Link></li>
                        {(this.props.user) ?
                            <li><Link className="nav-link" to="/animals">Wishlist</Link></li>
                            : null}
                        <li><Link className="nav-link" to="/locations">Search</Link></li>
                        {(this.props.user) ?
                            <>
                                <li><Link className="nav-link" to="/employees">Settings</Link></li>
                                <li><span className="nav-link" onClick={this.handleLogout}>Logout</span></li>
                            </>
                            : <li><Link className="nav-link" to="/login">Login</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}
export default withRouter(NavBar);