import React, { Component } from 'react';
import "./Home.css"

class Home extends Component {

    render() {
        return (
            <div >
                <picture>
                    <img src={require('../../images/Logo.png')} alt="RecordCollector Logo" />
                </picture>
            </div >

        )
    }
}
export default Home;