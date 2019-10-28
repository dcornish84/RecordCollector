import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import SearchList from './search/SearchList'
import SearchDetail from './search/SearchDetail'
import CatalogueDetails from './catalogue/CatalogueDetail'
import CatalogueList from './catalogue/CatalogueList'
import WishlistDetails from './wishlist/WishlistDetail'
import WishlistList from './wishlist/WishlistList'


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
                <Route exact path="/catalogue" render={(props) => {
                    return <CatalogueDetails user={this.props.user} setUser={this.props.setUser} {...props} />
                }} />
                <Route exact path="/catalogues" render={(props) => {
                    return <CatalogueList user={this.props.user} setUser={this.props.setUser} {...props} />
                }} />
                <Route exact path="/wishlist" render={(props) => {
                    return <WishlistDetails user={this.props.user} setUser={this.props.setUser} {...props} />
                }} />
                <Route exact path="/wishlist" render={(props) => {
                    return <WishlistList user={this.props.user} setUser={this.props.setUser} {...props} />
                }} />

            </React.Fragment>

        )
    }
}

export default ApplicationViews