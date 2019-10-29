import React, { Component } from 'react';
import CatalogueCard from "./CatalogueCard";
import API from '../../Modules/APIManager';


class CatalogueList extends Component {
    //This holds the state of the Catalogue
    state = {
        catalogue: [],
        loadingStatus: true,
    }

    getData = () => {
        let userId = parseInt(sessionStorage.getItem('credentials'));
        API.getAllCatalogue(userId).then(catalogue => {
            this.setState({
                catalogue: catalogue
            });
        });
    };



    componentDidMount() {
        //getAll from APIManager and hang on to that data; put it in state
        let userId = parseInt(sessionStorage.getItem('credentials'));
        API.getAllCatalogue(userId)
            .then(catalogue => {
                this.setState({
                    catalogue: catalogue
                })
            })
    }


    render() {
        return (
            <>
                <div>
                    {/* <Button color="danger" onClick={() => { this.props.history.push("/catalogue") }}>Add to Catalogue</Button> */}
                </div>
                <div>
                    {this.state.catalogue.map(record =>
                        <CatalogueCard
                            key={record.id}
                            // userId={this.props.user.id}
                            getData={this.getData}
                            artist={record.artist}
                            title={record.title}
                            date={record.year}
                            deleteEvent={this.deleteEvent}
                            {...this.props}
                            className="card" />)}
                </div>

            </>
        )
    }
}




export default CatalogueList