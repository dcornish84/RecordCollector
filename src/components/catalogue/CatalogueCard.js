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
                    <CardSubtitle> {this.props.date} </CardSubtitle >
                    <CardImg src={this.props.image}></CardImg>
                    <Button type="button" onClick={() => { this.props.history.push(`/catalogue/${this.props.id}/edit`) }}>Notes</Button>
                    <Button type="button" onClick={() => this.props.handleDelete(this.props.id)}>Delete</Button>
                </CardBody>
            </Card>
            </div >
        );
    }
}

export default CatalogueCard;