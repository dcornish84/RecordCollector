import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import { Button } from "reactstrap";
import API from "../../Modules/APIManager";

class SearchCard extends Component {

    state = {
        userId: parseInt(sessionStorage.getItem("userID")),
        title: "",
        artist: "",
        year: "",
        image: "",
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
        console.log("thanks Dylan", this.props)
        // console.log("hello", this.props.result.title)
        // console.log("what's up", this.props.result.year)
        // console.log("sick", this.props.result.cover_image)
        const newRecord = {
            title: this.props.result.title,
            year: this.props.result.year,
            image: this.props.result.cover_image,
            comments: this.state.comments,
            userId: this.state.userId
        }
        API.saveRecord(newRecord)
            .then(() => this.props.history.push("/catalogue"))
    }

    // build an object based on my ERD here

    handleSaveWishlist = () => {
        API.saveRecordWishlist(this.props.result.id)
        this.props.history.push("/wishlist");
    };

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
                            <ul><a href={this.props.result.resource_url}><img src={this.props.result.cover_image} /></a></ul>
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