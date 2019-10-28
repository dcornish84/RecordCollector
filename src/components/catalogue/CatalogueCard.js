import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import API from '../../Modules/APIManager'
import { Card, CardTitle, CardSubtitle, Button, CardImg, } from "reactstrap";
import CardBody from 'reactstrap/lib/CardBody';
// import CardImg from 'reactstrap/lib/CardImg';

class CatalogueCard extends Component {
    state = {
        userId: parseInt(sessionStorage.getItem("userID")),
        title: "",
        artist: "",
        year: "",
        image: "",
        comments: "",
        loadingStatus: false,
    }

    handleDelete = () => {
        this.setState({ loadingStatus: true });
        API.delete("catalogue", this.props.catalogue.id)
            .then(() => this.props.history.push("/CatalogueDetail")
            );
    };
    getAllCatalogue = () => {
        this.setState({ loadingstatus: true });
        API.saveRecord(this.props.catalogue.id)
            .then(() => this.props.getData())
            .then(() => this.props.history.push("/CatalogueDetail")
            );
    };

    render() {
        console.log(this.props)
        return (
            <div><Card className="card">

                <CardBody className="catalogueCard">
                    <CardTitle>Record: <span className="cardRecordName">{this.props.catalogue.title}</span></CardTitle>
                    <CardSubtitle>Artist: {this.props.catalogue.artist} </CardSubtitle >
                    <CardImg src={this.props.result.cover_image}></CardImg>
                    <Button type="button" onClick={() => { this.props.history.push(`/catalogue/${this.props.catalogue.id}/edit`) }}>Edit Details</Button>
                    <Button type="button" onClick={() => this.handleDelete(this.props.catalogue.id)}>Delete</Button>
                </CardBody>
            </Card>
            </div >
        );
    }
}

export default CatalogueCard;