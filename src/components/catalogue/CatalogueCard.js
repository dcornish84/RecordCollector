import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import API from '../../Modules/APIManager'
import { Card, CardTitle, CardSubtitle, Button, Media } from "reactstrap";
import CardBody from 'reactstrap/lib/CardBody';
// import CardImg from 'reactstrap/lib/CardImg';

class CatalogueCard extends Component {
    state = {
        release_title: "",
        loadingStatus: false,
    }

    handleDelete = () => {
        this.setState({ loadingStatus: true });
        API.delete("catalogue", this.props.release_title)
            .then(() => this.props.history.push("/CatalogueDetail")
            );
    };
    getAllCatalogue = () => {
        this.setState({ loadingstatus: true });
        API.saveRecord(this.props.release_title)
            .then(() => this.props.getData())
            .then(() => this.props.history.push("/CatalogueDetail")
            );
    };

    render() {

        return (
            <div><Card className="card">

                <CardBody className="catalogueCard">
                    <CardTitle>Record: <span className="cardRecordName">{this.props.catalogue}</span></CardTitle>
                    <CardSubtitle>Artist: {this.props.catalogue} </CardSubtitle >
                    {/* <Media src={this.props.record.cover_image}></Media> */}
                    {/* <Button type="button" onClick={() => { this.props.history.push(`/catalogue/${this.props.catalogue.id}/edit`) }}>Edit Details</Button> */}
                    <Button type="button" onClick={() => this.handleDelete(this.props.cataloge)}>Delete</Button>
                </CardBody>
            </Card>
            </div >
        );
    }
}

export default CatalogueCard;