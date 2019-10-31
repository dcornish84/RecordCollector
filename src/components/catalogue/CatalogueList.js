import React, { Component } from 'react';
import CatalogueCard from "./CatalogueCard";
import API from '../../Modules/APIManager';
// import WishlistCard from '../wishlist/WishlistCard';


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

    handleDelete = id => {
        //invoke the delete function in APIManger and re-direct to the CatalogueList.
        this.setState({ loadingStatus: true })
        API.delete("catalogue", id)
            .then(() => {
                this.getData()
            })
    }



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
                    {this.state.catalogue.map(record => {
                        return record.status === "true" ?

                            <CatalogueCard
                                key={record.id}
                                id={record.id}
                                getData={this.getData}
                                artist={record.artist}
                                title={record.title}
                                image={record.image}
                                date={record.year}
                                notes={record.notes}
                                handleDelete={this.handleDelete}
                                {...this.props}
                                className="card" />
                            : null
                    }
                    )}
                </div>

            </>
        )
    }
}




export default CatalogueList