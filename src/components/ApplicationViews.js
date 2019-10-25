import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import SearchList from './search/SearchList'
import SearchDetail from './search/SearchDetail'
import CatalogueList from './catalogue/CatalogueList'
import CatalogueDetails from './catalogue/CatalogueDetail'
import CatalogueEditForm from './catalogue/CatalogueEditForm'


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
                <Route exact path="/catalogue" render={props => {
                    return <CatalogueList {...props} />
                }} />
                <Route path="/catalogue/:recordId(\d+)/edit" render={props => {
                    return <CatalogueEditForm {...props} />
                }} />
                <Route exact path="/catalogue/:recordId(\d+)" render={(props) => {
                    return <CatalogueDetails recordId={parseInt(props.match.params.recordId)} {...props} />
                }} />

            </React.Fragment>

        )
    }
}

export default ApplicationViews