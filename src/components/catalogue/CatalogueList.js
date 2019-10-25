import React, { Component } from 'react';
import CatalogueCard from "./CatalogueCard";
import API from "../../Modules/APIManager";
import { Button } from 'reactstrap';


class CatalogueList extends Component {
    //This holds the state of the Catalogue
    state = {
        catalogue: [],
    }

    deleteRecord = id => {
        API.delete("catalogue", id)
            .then(() => {
                this.getData();
            })
    }

    getData = () => {
        //getAll from APIManager and hang on to that data; put it in state
        API.getAll("catalogue")
            .then((catalogue) => {
                this.setState({
                    catalogue: catalogue
                })
            })
    }

    componentDidMount() {
        this.getData()
    }

    render() {

        return (
            <>
                <div>
                    <Button color="danger" onClick={() => { this.props.history.push("/catalogue") }}>Add to Catalogue</Button>
                </div>
                <div>
                    {this.state.catalogue.map(catalogue =>
                        <CatalogueCard
                            key={catalogue.id}
                            getAll={this.getData}
                            catalogue={catalogue}
                            deleteEvent={this.deleteEvent}
                            {...this.props} />)}
                </div>

            </>
        )
    }
}




export default CatalogueList