import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import SearchList from './search/SearchList'
// import SearchCard from './search/SearchCard'
// import SearchForm from './search/SearchForm'
import SearchDetail from './search/SearchDetail'


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
                <Route path="/search" render={props => {
                    return <SearchList setUser={this.props.setUser} {...props} />
                }} />
                <Route exact path="/search/:searchResults(\d+)" render={(props) => {
                    return <SearchDetail searchResults={parseInt(props.match.params.searchResults)}{...props} />
                }} />

            </React.Fragment>

        )
    }
}

export default ApplicationViews