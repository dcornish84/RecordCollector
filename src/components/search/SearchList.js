import React, { Component } from "react";
import { Button, Input, Form, FormGroup, Label } from "reactstrap";
import { withRouter } from "react-router-dom";
import API from "../../Modules/APIManager"
import SearchCard from "./SearchCard"
import "./Search.css"


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
        API.artistSearch(this.state.search)
            .then(results => this.setState({ searchResults: results.results }))
    };

    componentDidMount() {

    }

    render() {
        return (
            <>
                <Form className="searchFarm">
                    <FormGroup>
                        <div className="searchBtnDiv">
                            <Input
                                className="searchForm"
                                type="search"
                                id="search"
                                placeholder="Search for artist or release"
                                aria-label="Search"
                                onChange={this.handleFieldChange}
                            ></Input>
                            <Button outline color="secondary" size="md"
                                className="searchFormButt"
                                type="button"
                                required
                                onClick={this.newSearch}
                            >
                                Search
				</Button>{' '}
                        </div>
                    </FormGroup>
                </Form>
                <>
                    {this.state.searchResults.map(result =>
                        <div key={result.id}>

                            <SearchCard

                                result={result}
                                {...this.props}
                                newSearch={this.newSearch} />
                        </div>



                    )
                    }
                </>
            </>
        );
    }
}

export default withRouter(SearchList);