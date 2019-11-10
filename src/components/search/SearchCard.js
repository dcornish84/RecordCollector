import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import {
    Button, Card, CardBody,
    CardTitle, CardSubtitle
} from "reactstrap";
import API from "../../Modules/APIManager";
import "./Search.css"

class SearchCard extends Component {

    state = {
        userId: "",
        title: "",
        artist: "",
        year: "",
        image: "",
        notes: "",
        status: "true"
    };


    handleSaveCatalogue = () => {
        API.getAllCatalogue(parseInt(sessionStorage.getItem("credentials"), this.props.result.title), this.props.result.id)
            .then((catalogue) => {
                let match = false
                catalogue.forEach(album => {
                    if (album.title === this.props.result.title) {
                        alert("You've already added this album")
                        match = true
                    }
                });
                if (match === false) {
                    this.setState({
                        title: this.props.result.title,
                        year: this.props.result.year,
                        image: this.props.result.cover_image,
                    })
                    let userId = parseInt(sessionStorage.getItem("credentials"))
                    const newRecord = {
                        title: this.props.result.title,
                        year: this.props.result.year,
                        image: this.props.result.cover_image,
                        status: this.state.status,
                        notes: this.state.notes,
                        userId: userId
                    }
                    API.saveRecord(newRecord)
                        .then(() => this.props.history.push("/catalogue"))
                }

            }
            )
    }



    handleSaveWishlist = () => {
        API.getAllWishlist(parseInt(sessionStorage.getItem("credentials"), this.props.result.title), this.props.result.id)
            .then((wishlist) => {
                let match = false
                wishlist.forEach(album => {
                    if (album.title === this.props.result.title) {
                        alert("You've already added this album")
                        match = true
                    }
                });
                if (match === false) {
                    this.setState({
                        title: this.props.result.title,
                        year: this.props.result.year,
                        image: this.props.result.cover_image,

                    })
                    let userId = parseInt(sessionStorage.getItem("credentials"))
                    const newRecordWishlist = {
                        title: this.props.result.title,
                        year: this.props.result.year,
                        image: this.props.result.cover_image,
                        comments: this.state.comments,
                        status: this.state.status,
                        notes: this.props.notes,
                        userId: userId
                    }
                    API.saveRecordWishlist(newRecordWishlist)
                        .then(() => this.props.history.push("/wishlist"))
                };
            })
    }


    render() {
        return (

            <div className="card">
                <Card>
                    <CardBody>
                        <div className="card-content">
                            <h3>

                                {" "}
                                <span className="card-searchResults">

                                    <CardTitle className="searchTitle">{this.props.result.title}</CardTitle>
                                    <CardSubtitle className="searchTitle">{this.props.result.release_title}</CardSubtitle>
                                    <CardSubtitle className="searchDate">{this.props.result.year}</CardSubtitle>
                                    <ul><a href={this.props.result.resource_url}><img src={this.props.result.cover_image} className="searchCardImage" alt="" /></a></ul>
                                    {/* what will appear on search card */}
                                </span>

                            </h3>
                            <div className="populateSearch">

                            </div>
                            <Button outline color="secondary" size="md"
                                type="button"
                                className="addToCatalogueButt"
                                onClick={() => this.handleSaveCatalogue()}>
                                Add to Catalogue
				</Button>
                        </div>
                        <div>
                            <Button outline color="secondary" size="md"
                                type="button"
                                className="addToWishlistButt"
                                onClick={() => this.handleSaveWishlist()}>
                                Add to Wishlist
				</Button>
                        </div>
                    </CardBody>
                </Card>
            </div>

        );
    }
}

export default withRouter(SearchCard);