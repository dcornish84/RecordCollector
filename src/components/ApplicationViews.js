import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import Login from './auth/Login'
import Register from './auth/Register'

class ApplicationViews extends Component {

    isAuthenticated = () => localStorage.getItem("credentials") !== null

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />
                <Route path="/login" render={props => {
                    return <Login setUser={this.props.setUser} {...props} />
                }} />
                <Route path="/register" render={props => {
                    return <Register setUser={this.props.setUser} {...props} />
                }} />
            </React.Fragment>

        )
    }
}

export default ApplicationViews