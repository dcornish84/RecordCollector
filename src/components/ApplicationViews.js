import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import SearchList from './search/SearchList'
import SearchDetail from './search/SearchDetail'
import CatalogueDetails from './catalogue/CatalogueDetail'
import CatalogueList from './catalogue/CatalogueList'
import CatalogueNotes from './catalogue/CatalogueNotes'
import WishlistDetails from './wishlist/WishlistDetail'
import WishlistList from './wishlist/WishlistList'
import WishlistNotes from './wishlist/WishlistNotes'


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
                    return <SearchList setUser={this.props.setUser} userId={this.props.userId}{...props} />
                }} />
                <Route exact path="/search/:searchResults(\d+)" render={(props) => {
                    return <SearchDetail searchResults={parseInt(props.match.params.searchResults)}{...props} />
                }} />
                <Route exact path="/catalogue/:catalogueId(\d+)" render={(props) => {
                    return <CatalogueDetails userId={this.props.userId} setUser={this.props.setUser} {...props} />
                }} />
                <Route exact path="/catalogue" render={(props) => {
                    return <CatalogueList userId={this.props.userId} setUser={this.props.setUser} {...props} />
                }} />
                <Route exact path="/wishlist/:wishlistId(\d+)" render={(props) => {
                    return <WishlistDetails userId={this.props.userId} setUser={this.props.setUser} {...props} />
                }} />
                <Route exact path="/wishlist" render={(props) => {
                    return <WishlistList userId={this.props.userId} setUser={this.props.setUser} {...props} />
                }} />
                <Route path="/catalogue/:catalogueId(\d+)/edit" render={(props) => {
                    return <CatalogueNotes userId={this.props.userId} setUser={this.props.setUser} catalogueId={parseInt(props.match.params.catalogueId)} {...props} />
                }} />
                <Route path="/wishlist/:wishlistId(\d+)/edit" render={(props) => {
                    return <WishlistNotes userId={this.props.userId} setUser={this.props.setUser} wishlistId={parseInt(props.match.params.wishlistId)} {...props} />
                }} />

            </React.Fragment>

        )
    }
}

export default ApplicationViews