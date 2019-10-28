import React, { Component } from 'react';
import API from '../../Modules/APIManager';


class SearchDetail extends Component {

    state = {
        searchResults: "",
        loadingStatus: true
    }

    handleDelete = () => {
        //invoke the delete function in APIManger and re-direct to the search list.
        this.setState({ loadingStatus: true })
        API.delete(this.props.searchResults)
            .then(() => this.props.history.push("/search"))
    }
    componentDidMount() {

        //get(id) from APIManager and hang on to that data; put it into state
        API.recordSearch(this.props.searchResults)
            .then((record) => {
                this.setState({
                    name: record.release_title,
                    loadingStatus: false
                });
            });
    }
    render() {
        if (this.state.loadingStatus) {
            return <p>Loading...</p>
        }

        return (
            <div className="card">
                <div className="card-content">
                    <h3>Results <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
                    {/* <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button> */}
                </div>
            </div>
        );
    }
}

export default SearchDetail;