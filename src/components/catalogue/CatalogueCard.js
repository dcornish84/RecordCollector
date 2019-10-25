import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import API from '../../Modules/APIManager'
import { Card, CardTitle, CardSubtitle, Button, Media } from "reactstrap";
import CardBody from 'reactstrap/lib/CardBody';
// import CardImg from 'reactstrap/lib/CardImg';

class CatalogueCard extends Component {

    handleDelete = (id) => {
        API.delete("catalogue", id)
            .then(() => this.props.getData());
    }

    getRecords = () => {
        this.setState({ loadingstatus: true });
        API.recordSearch(this.props.catalogue)
            .then(() => this.props.getData())
            .then(() => this.props.history.push("/catalogue")
            );
    };

    render() {

        return (
            <div><Card className="card">

                {/* <CardImg>
                        <img src={} alt="" />
                    </CardImg> */}
                <CardBody className="catalogueCard">
                    <CardTitle>Record: <span className="cardRecordName">{this.props.catalogue.title}</span></CardTitle>
                    <CardSubtitle>Artist: {this.props.catalogue.artist} </CardSubtitle >
                    {/* <Media src={this.props.record.cover_image}></Media> */}
                    <Button type="button" onClick={() => { this.props.history.push(`/catalogue/${this.props.catalogue}/edit`) }}>Edit Details</Button>
                    <Button type="button" onClick={() => this.handleDelete(this.props.catalogue)}>Delete</Button>
                </CardBody>
            </Card>
            </div >
        );
    }
}

export default CatalogueCard;