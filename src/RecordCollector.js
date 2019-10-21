import React, { Component } from 'react'
import './RecordCollector.css'
// import AnimalCard from './animal/AnimalCard';
// import EmployeeCard from './employee/EmployeeCard';
// import LocationCard from './location/LocationCard';
// import OwnerCard from './owner/OwnerCard';
import NavBar from './nav/NavBar';
import ApplicationViews from './ApplicationViews';

class RecordCollector extends Component {
    state = {
        user: false
    }


    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    setUser = (authObj) => {

        sessionStorage.setItem(
            "credentials",
            JSON.stringify(authObj)
        )
        this.setState({
            user: this.isAuthenticated()
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
                <ApplicationViews user={this.state.user}
                    setUser={this.setUser} />
            </>
        )
    }
}

export default RecordCollector