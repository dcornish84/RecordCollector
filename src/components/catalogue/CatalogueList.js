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

    // deleteRecord = id => {
    //     API.delete("catalogue", id)
    //         .then(() => {
    //             API.getAll("catalogue")
    //                 .then((catalogue) => {
    //                     this.setState({
    //                         catalogue: catalogue
    //                     })
    //                     this.getData()

    //                 })
    //         })
    // }

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
                    {/* <Button color="danger" onClick={() => { this.props.history.push("/catalogue") }}>Add to Catalogue</Button> */}
                </div>
                <div>
                    {this.state.catalogue.map(record =>
                        <CatalogueCard
                            key={record.id}
                            id={record.id}
                            getData={this.getData}
                            artist={record.artist}
                            title={record.title}
                            image={record.image}
                            date={record.year}
                            handleDelete={this.handleDelete}
                            {...this.props}
                            className="card" />)}
                </div>

            </>
        )
    }
}




export default CatalogueList