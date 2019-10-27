import React, { Component } from 'react';
import API from "./../../Modules/APIManager"
import CatalogueList from "./CatalogueList"


class CatalogueDetails extends Component {
    state = {
        catalogue: [],
        loadingStatus: true,
    }

    handleDelete = () => {
        //invoke the delete function in APIManger and re-direct to the CatalogueList.
        this.setState({ loadingStatus: true })
        API.delete("catalogue", this.props.id)
            .then(() => this.props.history.push("/catalogue"))
    }

    getData = () => {
        API.getAll("catalogue", sessionStorage.getItem("userId")).then(
            catalogue => {
                this.setState({
                    catalogue: catalogue
                });
            }
        );
    };

    componentDidMount() {
        this.getData();
    }

    newCatalogue = () => {
        this.props.getData();
    }

    render() {

        return (
            <>
                <div className="container">
                    <div className="text-block">
                        <section className="catalogueDetail">
                            <CatalogueList
                                artist={this.state.artist}
                                title={this.state.title}
                                date={this.state.date}
                                getData={this.getData}
                                {...this.props}
                            />
                        </section>
                    </div>
                </div>
            </>
        );
    }
}

export default CatalogueDetails