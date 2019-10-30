import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import API from "../../Modules/APIManager"

class WishlistNotes extends Component {
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
            id: this.props.match.params.wishlistId,
            title: this.state.title,
            year: this.state.year,
            image: this.state.image,
            notes: this.state.notes,
            status: this.state.status,
            userId: userId
        }
        API.update("wishlist", newNote)
            .then(() => this.props.history.push("/wishlist"));
    }

    componentDidMount() {
        API.get("wishlist", this.props.wishlistId)
            .then(wishlist => {
                this.setState({
                    title: wishlist.title,
                    year: wishlist.year,
                    image: wishlist.image,
                    notes: wishlist.notes,
                    status: wishlist.status,
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

export default WishlistNotes