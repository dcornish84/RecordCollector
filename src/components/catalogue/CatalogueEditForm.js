import React, { Component } from "react"
import API from "../../Modules/APIManager"
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class CatalogueEditForm extends Component {
    state = {
        albumTitle: "",
        artist: "",
        date: "",
        image: "",
        loadingStatus: true,
    }

    // set state to value of input
    handleFieldChange = record => {
        const stateToChange = {}
        stateToChange[record.target.id] = record.target.value
        this.setState(stateToChange)
    }
    // update edited record object
    updateExistingRecord = record => {
        record.preventDefault()
        this.setState({ loadingStatus: true });
        const editedForm = {
            id: this.props.match.params.recordId,
            albumTitle: this.state.albumTitle,
            artist: this.state.artist,
            date: this.state.date,
            image: this.state.image,
            loadingStatus: false
        };
        // push edited record
        API.update("catalogue", editedForm)
            .then(() => this.props.history.push("/catalogue"))
    }

    componentDidMount() {
        API.get("catalogue", this.props.match.params.recordId)
            .then(record => {
                this.setState({
                    albumTitle: record.albumTitle,
                    artist: record.artist,
                    date: record.date,
                    image: record.image,
                    loadingStatus: false
                });
            });
    }



    // render JSX to be displayed on the DOM
    render() {
        return (
            <>
                <Form onSubmit={this.updateExistingRecord} className="recordForm">
                    <FormGroup className="recordFormGroup">
                        <Label htmlFor="album">Album</Label>
                        <Input
                            type="text"
                            required
                            className="albumForm"
                            onChange={this.handleFieldChange}
                            id="albumTitle"
                            value={this.state.albumTitle}
                            placeholder="Album Name"></Input>
                    </FormGroup>
                    <FormGroup className="artistInput">
                        <Label htmlFor="artist">Artist</Label>
                        <Input
                            type="text"
                            required
                            className="artistForm"
                            onChange={this.handleFieldChange}
                            id="artist"
                            value={this.state.artist}
                        />
                    </FormGroup>
                    <FormGroup className="dateInput">
                        <Label htmlFor="date">Date</Label>
                        <Input
                            type="date"
                            required
                            className="dateForm"
                            onChange={this.handleFieldChange}
                            id="date"
                            value={this.state.date}
                        />
                    </FormGroup><FormGroup className="dateInput">
                        <Label htmlFor="completeDate">Image</Label>
                        <Input
                            type="image"
                            required
                            className="imageForm"
                            onChange={this.handleFieldChange}
                            id="image"
                            value={this.state.image}
                        />
                    </FormGroup>
                    <Button
                        type="submit"
                        className="btn btn-primary">
                        Submit
                </Button>
                </Form>
            </>
        );
    }
}
export default CatalogueEditForm