import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import { Button } from "reactstrap";
import API from "../../Modules/APIManager";

class SearchCard extends Component {
    handleSave = id => {
        API.saveRecord(id).then(() => this.props.newSearch())
        this.props.history.push("/catalogue");
    };
    render() {
        return (

            <div className="card">
                <div className="card-content">
                    <h3>
                        Record{" "}
                        <span className="card-searchResults">
                            {this.props.result.artist}
                            {this.props.result.title}
                            {this.props.result.thumb}
                        </span>
                    </h3>
                    <div className="populateSearch">

                    </div>
                    <Button
                        type="button"
                        onClick={() => this.handleSave(this.props.record)}
                    >
                        Add to Catalogue
				</Button>

                </div>
            </div>
        );
    }
}
export default withRouter(SearchCard);