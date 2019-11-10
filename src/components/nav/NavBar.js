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

            <footer>
                <nav className="navbar">
                    <ul className="buttonContainer">
                        {(this.props.user) ?
                            <>
                                <Link className="catalogueButton" to="/catalogue">Catalogue</Link>{' '}
                                <Link className="wishlistButton" to="/wishlist">Wishlist</Link>{' '}
                                <Link className="searchButton" to="/search">Search</Link>{' '}
                                <Link className="logoutButton" to="/" onClick={this.handleLogout}>Logout</Link>{' '}
                            </>
                            : <><Link className="loginButton" to="/login">Login</Link>{' '}
                                <Link className="registerButton" to="/register">Register</Link>{' '}</>
                        }
                    </ul>
                </nav>
            </footer>

        )
    }
}
export default withRouter(NavBar);
