import React, { Component } from 'react';
import API from '../../Modules/APIManager'
import { Card, CardTitle, CardSubtitle, Button, CardImg, CardBody, CardText, CardColumns } from "reactstrap";
import "./Catalogue.css"


class CatalogueCard extends Component {
    state = {
        userId: parseInt(sessionStorage.getItem("credentials")),
        title: "",
        year: "",
        image: "",
        notes: "",
        status: "true",
        loadingStatus: false,
    }

    getAllCatalogue = () => {
        this.setState({ loadingstatus: true });
        API.saveRecord(this.props.catalogue.id)
            .then(() => this.props.getData())
            .then(() => this.props.history.push("/catalogue")
            );
    };

    render() {

        return (
            <div><Card className="card">

                <CardBody className="catalogueCard">
                    <CardTitle> <span className="cardRecordName">{this.props.title}</span></CardTitle>
                    <CardSubtitle className="cardDate"> {this.props.date} </CardSubtitle >
                    <CardImg className="cardImage" src={this.props.image}></CardImg>
                    <CardText className="recordNotes">My Notes: {''} {this.props.notes} </CardText>
                    <Button type="button" outline color="secondary" size="md" className="updateNotesButt" onClick={() => { this.props.history.push(`/catalogue/${this.props.id}/edit`) }}>Update Notes</Button>
                    <Button type="button" outline color="secondary" size="md" className="deleteButt" onClick={() => this.props.handleDelete(this.props.id)}>Delete</Button>
                </CardBody>
            </Card>
            </div >

        );
    }
}

export default CatalogueCard;