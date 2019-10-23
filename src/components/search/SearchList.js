import React, { Component } from "react";
import { Button, Input } from "reactstrap";
import { withRouter } from "react-router-dom";
import API from "../../Modules/APIManager"
import SearchCard from "./SearchCard"


class SearchList extends Component {
    //set the initial state
    state = {
        search: "",
        searchResults: [],
        loadingStatus: true
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    newSearch = () => {
        API.recordSearch(this.state.searchResults)
            .then(results => this.setState({ searchResults: results }))
            .then(result => console.log(this.state.searchResults.results))
        // .then(() => this.state.searchResults.results.map(result => console.log(result)))
    };

    render() {
        return (
            <>
                <div className="searchBtnDiv">
                    <Input
                        className="form-control mr-sm-2"
                        type="search"
                        id="search"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={this.handleFieldChange}
                    ></Input>
                    <Button
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="button"
                        required
                        onClick={this.newSearch}
                    >
                        Search
				</Button>
                </div>
                <>
                    {/* {this.state.searchResults.results.forEach(result =>
                        <div>
                            <SearchCard
                                key={result.id}
                                result={result.results}
                                {...this.props} />)}
                    </div>
                    )} */}
                </>
            </>
        );
    }
}

export default withRouter(SearchList);