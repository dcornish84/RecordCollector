import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import { Button } from "reactstrap";
import API from "../../Modules/APIManager";

class SearchCard extends Component {

    state = {
        userId: "",
        title: "",
        artist: "",
        year: "",
        image: "",
        status: "true"
        // comments: ""
    };


    handleSaveCatalogue = () => {
        this.setState({
            title: this.props.result.title,
            // artist:
            year: this.props.result.year,
            image: this.props.result.cover_image,
            // comments: ""

        })
        let userId = parseInt(sessionStorage.getItem("credentials"))
        const newRecord = {
            title: this.props.result.title,
            year: this.props.result.year,
            image: this.props.result.cover_image,
            comments: this.state.comments,
            status: this.state.status,
            userId: userId
        }
        console.log("props", this.props.userId)
        API.saveRecord(newRecord)
            .then(() => this.props.history.push("/catalogue"))
    };

    handleSaveWishlist = () => {
        this.setState({
            title: this.props.result.title,
            // artist:
            year: this.props.result.year,
            image: this.props.result.cover_image,
            // comments: ""

        })
        let userId = parseInt(sessionStorage.getItem("credentials"))
        const newRecordWishlist = {
            title: this.props.result.title,
            year: this.props.result.year,
            image: this.props.result.cover_image,
            comments: this.state.comments,
            userId: userId
        }
        console.log("props", this.props.userId)
        API.saveRecordWishlist(newRecordWishlist)
            .then(() => this.props.history.push("/wishlist"))
    }
        ;

    render() {
        return (

            <div className="card">
                <div className="card-content">
                    <h3>
                        {" "}
                        <span className="card-searchResults">
                            <ul>{this.props.result.title}</ul>
                            <ul>{this.props.result.release_title}</ul>
                            <ul>{this.props.result.year}</ul>
                            <ul><a href={this.props.result.resource_url}><img src={this.props.result.cover_image} alt="" /></a></ul>
                            {/* what will appear on search card */}
                        </span>
                    </h3>
                    <div className="populateSearch">

                    </div>
                    <Button
                        type="button"
                        onClick={() => this.handleSaveCatalogue()}>
                        Add to Catalogue
				</Button>
                </div>
                <div>
                    <Button
                        type="button"
                        onClick={() => this.handleSaveWishlist()}>
                        Add to Wishlist
				</Button>
                </div>
            </div>
        );
    }
}
export default withRouter(SearchCard);