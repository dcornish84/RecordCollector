import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import API from "../../Modules/APIManager"

class CatalogueNotes extends Component {
    state = {
        userId: parseInt(sessionStorage.getItem("credentials")),
        title: "",
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
        let userId = parseInt(sessionStorage.getItem('credentials'));
        const newNote = {
            id: this.props.match.params.catalogueId,
            title: this.state.title,
            year: this.state.year,
            image: this.state.image,
            notes: this.state.notes,
            status: this.state.status,
            userId: userId
        }
        API.update("catalogue", newNote)
            .then(() => this.props.history.push("/catalogue"));
    }

    componentDidMount() {
        API.get("catalogue", this.props.catalogueId)
            .then(catalogue => {
                this.setState({
                    title: catalogue.title,
                    year: catalogue.year,
                    image: catalogue.image,
                    notes: catalogue.notes,
                    status: catalogue.status,
                    loadingStatus: false
                })
            })
    }

    render() {

        return (
            <>
                <Form onSubmit={this.constructNewNote} className="noteForm">
                    <FormGroup className="noteFormGroup">
                        <Label htmlFor="note"></Label>
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