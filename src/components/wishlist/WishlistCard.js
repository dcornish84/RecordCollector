import React, { Component } from 'react';
import API from '../../Modules/APIManager'
import { Card, CardTitle, CardSubtitle, Button, CardImg, CardBody, CardText } from "reactstrap";


class WishlistCard extends Component {
    state = {
        userId: parseInt(sessionStorage.getItem("credentials")),
        title: "",
        year: "",
        image: "",
        notes: "",
        status: "true",
        loadingStatus: false,
    }

    getAllWishlist = () => {
        this.setState({ loadingstatus: true });
        API.saveRecordWishlist(this.props.wishlist.id)
            .then(() => this.props.getData())
            .then(() => this.props.history.push("/wishlist")
            );
    };

    render() {
        return (
            <div><Card className="card">

                <CardBody className="wishlistCard">
                    <CardTitle> <span className="cardRecordName">{this.props.title}</span></CardTitle>
                    <CardSubtitle> {this.props.date} </CardSubtitle >
                    <CardImg src={this.props.image}></CardImg>
                    <CardText> {this.props.notes}</CardText>
                    <Button type="button" onClick={() => { this.props.history.push(`/wishlist/${this.props.id}/edit`) }}>Update Notes</Button>
                    <Button type="button" onClick={() => this.props.handleDelete(this.props.id)}>Delete</Button>
                </CardBody>
            </Card>
            </div >
        );
    }
}

export default WishlistCard;