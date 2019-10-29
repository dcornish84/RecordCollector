import React, { Component } from 'react';
import API from '../../Modules/APIManager'
import { Card, CardTitle, CardSubtitle, Button, CardImg, CardBody } from "reactstrap";


class CatalogueCard extends Component {
    state = {
        userId: parseInt(sessionStorage.getItem("credentials")),
        title: "",
        artist: "",
        year: "",
        image: "",
        loadingStatus: false,
    }

    handleDelete = () => {
        this.setState({ loadingStatus: true });
        API.delete("catalogue", this.props.id)
            .then(() => this.props.history.push("/catalogue")
            );
    };
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
                    <CardTitle>Record: <span className="cardRecordName">{this.props.title}</span></CardTitle>
                    <CardSubtitle>Artist: {this.props.artist} </CardSubtitle >
                    <CardImg src={this.props.image}></CardImg>
                    <Button type="button" onClick={() => { this.props.history.push(`/catalogue/${this.props.id}/edit`) }}>Edit Details</Button>
                    <Button type="button" onClick={() => this.handleDelete(this.props.id)}>Delete</Button>
                </CardBody>
            </Card>
            </div >
        );
    }
}

export default CatalogueCard;