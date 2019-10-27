import React, { Component } from 'react';
import CatalogueCard from "./CatalogueCard";
import { Button } from 'reactstrap';
import API from '../../Modules/APIManager';


class CatalogueList extends Component {
    //This holds the state of the Catalogue
    state = {
        catalogue: [],
        artist: "",
        title: "",
        date: "",
        loadingStatus: true,
    }

    componentDidMount() {
        //getAll from APIManager and hang on to that data; put it in state
        API.getAll()
            .then((catalogue) => {
                this.setState({
                    catalogue: catalogue
                })
            })
    }


    render() {

        return (
            <>
                <div>
                    <Button color="danger" onClick={() => { this.props.history.push("/catalogue") }}>Add to Catalogue</Button>
                </div>
                <div>
                    {this.state.catalogue(record =>
                        <CatalogueCard
                            key={record.id}
                            user={this.props.user}
                            getData={this.getData}
                            artist={record.artist}
                            title={record.title}
                            date={record.date}
                            deleteEvent={this.deleteEvent}
                            {...this.props} />)}
                </div>

            </>
        )
    }
}




export default CatalogueList