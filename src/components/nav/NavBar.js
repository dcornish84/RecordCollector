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
                        {(this.props.user) ?
                            <>
                                <li><Link className="nav-link" to="/catalogue">Catalogue</Link></li>
                                <li><Link className="nav-link" to="/wishlist">Wishlist</Link></li>
                                <li><Link className="nav-link" to="/search">Search</Link></li>
                                <li><Link className="nav-link" to="/" onClick={this.handleLogout}>Logout</Link></li>
                            </>
                            : <><li><Link className="nav-link" to="/login">Login</Link></li>
                                <li><Link className="nav-link" to="/register">Register</Link></li></>
                        }
                    </ul>
                </nav>
            </header>
        )
    }
}
export default withRouter(NavBar);
