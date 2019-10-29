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
        comments: "",
        loadingStatus: true,
    }

    handleDelete = () => {
        //invoke the delete function in APIManger and re-direct to the CatalogueList.
        this.setState({ loadingStatus: true })
        API.delete("catalogue", this.props.id)
            .then(() => this.props.history.push("/catalogue"))
    }

    getData = () => {
        let userId = this.props.getUser()
        console.log("YOOO", userId)
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