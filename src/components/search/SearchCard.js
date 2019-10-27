import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import { Button } from "reactstrap";
import API from "../../Modules/APIManager";

class SearchCard extends Component {
    handleSaveCatalogue = id => {
        API.saveRecord(id).then(() => this.props.newSearch())
        this.props.history.push("/catalogue");
    };

    handleSaveWishlist = id => {
        API.saveRecordWishlist(id).then(() => this.props.newSearch())
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
                        onClick={() => this.handleSaveCatalogue(this.props.release_title)}>
                        Add to Catalogue
				</Button>
                </div>
                <div>
                    <Button
                        type="button"
                        onClick={() => this.handleSaveWishlist(this.props.release_title)}>
                        Add to Wishlist
				</Button>
                </div>
            </div>
        );
    }
}
export default withRouter(SearchCard);