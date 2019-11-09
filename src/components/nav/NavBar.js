import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import './NavBar.css'
import { Button } from "reactstrap"



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
                                <Button outline color="secondary" size="sm"><Link className="catalogue" to="/catalogue">Catalogue</Link></Button>{' '}
                                <Button outline color="secondary" size="sm"><Link className="wishlist" to="/wishlist">Wishlist</Link></Button>{' '}
                                <Button outline color="secondary" size="sm"><Link className="search" to="/search">Search</Link></Button>{' '}
                                <Button outline color="secondary" size="sm"><Link className="logout" to="/" onClick={this.handleLogout}>Logout</Link></Button>{' '}
                            </>
                            : <><Button outline color="secondary" size="sm"><Link className="login" to="/login">Login</Link></Button>{' '}
                                <Button outline color="secondary" size="sm"><Link className="register" to="/register">Register</Link></Button>{' '}</>
                        }
                    </ul>
                </nav>
            </footer>
        )
    }
}
export default withRouter(NavBar);
