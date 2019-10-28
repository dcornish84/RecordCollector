import React, { Component } from 'react';
import CatalogueCard from "./CatalogueCard";
import API from '../../Modules/APIManager';


class CatalogueList extends Component {
    //This holds the state of the Catalogue
    state = {
        catalogue: [],
    }

    componentDidMount() {
        //getAll from APIManager and hang on to that data; put it in state
        API.getAllCatalogue()
            .then((catalogue) => {
                this.setState({
                    catalogue: catalogue
                })
            })
    }


    render() {
        console.log(this.state.catalogue)
        return (
            <>
                <div>
                    {/* <Button color="danger" onClick={() => { this.props.history.push("/catalogue") }}>Add to Catalogue</Button> */}
                </div>
                <div>
                    {this.state.catalogue.map(record =>
                        <CatalogueCard
                            key={record.id}
                            user={this.props.user}
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