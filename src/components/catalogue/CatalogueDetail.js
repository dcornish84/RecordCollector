import React, { Component } from 'react';
import API from "./../../Modules/APIManager"
import CatalogueList from "./CatalogueList"


class CatalogueDetails extends Component {
    state = {
        catalogue: [],
        userId: "",
        title: "",
        artist: "",
        year: "",
        image: "",
        notes: "",
        loadingStatus: true,
    }




    getData = () => {
        let userId = this.props.getUser()
        API.getAll("catalogue", sessionStorage.getItem("credentials")).then(
            catalogue => {
                this.setState({
                    catalogue: catalogue,
                    user: userId,
                });
            }
        );
    };

    componentDidMount() {
        this.getData();
    }


    render() {

        return (
            <>
                <div className="container">
                    <div className="text-block">
                        <section className="catalogueDetail">
                            <CatalogueList
                                artist={this.state.artist}
                                title={this.state.release_title}
                                date={this.state.year}
                                id={this.state.id}
                                notes={this.state.notes}
                                handleDelete={this.handleDelete}
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