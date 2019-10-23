import React, { Component } from 'react';
import API from '../../Modules/APIManager';

class SearchForm extends Component {
    state = {
        searchResult: "",
        loadingStatus: false
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };


    searchParam = evt => {
        evt.preventDefault();
        if (this.state.searchResult === "") {
            window.alert("Please search for an Artist or Album");
        } else {
            this.setState({ loadingStatus: true });
            const search = {
                name: this.state.searchResults,
            };


            API.post(search)
                .then(() => this.props.history.push("/catalogue"));
        }
    };

    render() {

        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="searchResult"
                                placeholder="Search"
                            />
                            <label htmlFor="searchResult">Search</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.searchParam}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default SearchForm