import React, { Component } from 'react'
import './RecordCollector.css'
import NavBar from './components/nav/NavBar';
import ApplicationViews from '../src/components/ApplicationViews';

class RecordCollector extends Component {
    state = {
        user: false,
        userId: ""
    }


    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    setUser = (authObj) => {

        sessionStorage.setItem(
            "credentials",
            JSON.stringify(authObj)
        )
        this.setState({
            user: this.isAuthenticated(),
            userId: parseInt(sessionStorage.getItem("credentials"))
        });
    }

    clearUser = () => {
        sessionStorage.clear()

        this.setState({
            user: this.isAuthenticated()
        });

    }
    componentDidMount() {
        this.setState({
            user: this.isAuthenticated()
        })
    }

    render() {
        return (
            <>
                <NavBar user={this.state.user} clearUser={this.clearUser} />
                <ApplicationViews userId={this.state.userId}
                    setUser={this.setUser} />
            </>
        )
    }
}

export default RecordCollector