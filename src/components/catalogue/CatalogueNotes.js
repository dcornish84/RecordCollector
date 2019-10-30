import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import API from "../../Modules/APIManager"

class CatalogueNotes extends Component {
    state = {
        userId: parseInt(sessionStorage.getItem("credentials")),
        title: "",
        artist: "",
        year: "",
        image: "",
        notes: "",
        status: "true",
        loadingStatus: false,
    };
    // sets state to value of input field
    handleFieldChange = recordNotes => {
        const stateToChange = {};
        stateToChange[recordNotes.target.id] = recordNotes.target.value;
        this.setState(stateToChange);
    };

    // Make a new note object

    constructNewNote = note => {
        note.preventDefault()
        this.setState({ loadingStatus: true });
        const newNote = {
            title: this.props.title,
            year: this.props.year,
            image: this.props.cover_image,
            status: this.state.status,
            notes: this.props.notes,
            userId: this.state.userId,
            loadingStatus: true
        }
        API.update("catalogue", newNote)
            .then(() => this.props.history.push("/catalogue"));
    }
    componentDidMount() {
        //getAll from APIManager and hang on to that data; put it in state
        let userId = parseInt(sessionStorage.getItem('credentials'));
        API.getAllCatalogue(userId)
            .then(catalogue => {
                this.setState({
                    catalogue: catalogue
                })
            })
    }

    render() {

        return (
            <>
                <Form onSubmit={this.constructNewNote} className="noteForm">
                    <FormGroup className="noteFormGroup">
                        <Label htmlFor="note">Notes</Label>
                        <Input
                            type="text"
                            required
                            className="noteFormInput"
                            onChange={this.handleFieldChange}
                            id="notes"
                            placeholder=""></Input>
                    </FormGroup>
                    <Button
                        type="submit"
                        onClick={this.constructNewNote}
                        className="btn btn-primary">
                        Submit
                </Button>
                </Form>
            </>
        )
    }
}

export default CatalogueNotes