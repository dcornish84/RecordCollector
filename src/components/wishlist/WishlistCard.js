import React, { Component } from 'react';
import API from '../../Modules/APIManager'
import { Card, CardTitle, CardSubtitle, Button, CardImg, CardBody } from "reactstrap";


class WishlistCard extends Component {
    state = {
        userId: parseInt(sessionStorage.getItem("credentials")),
        title: "",
        artist: "",
        year: "",
        image: "",
        status: "true",
        loadingStatus: false,
    }

    getAllWishlist = () => {
        this.setState({ loadingstatus: true });
        API.saveRecordWishlist(this.props.wishlists.id)
            .then(() => this.props.getData())
            .then(() => this.props.history.push("/wishlist")
            );
    };

    render() {
        return (
            <div><Card className="card">

                <CardBody className="wishlistCard">
                    <CardTitle>Record: <span className="cardRecordName">{this.props.title}</span></CardTitle>
                    <CardSubtitle>Artist: {this.props.artist} </CardSubtitle >
                    <CardImg src={this.props.image}></CardImg>
                    <Button type="button" onClick={() => { this.props.history.push(`/wishlist/${this.props.wishlists.id}/edit`) }}>Notes</Button>
                    <Button type="button" onClick={() => this.props.handleDelete(this.props.id)}>Delete</Button>
                </CardBody>
            </Card>
            </div >
        );
    }
}

export default WishlistCard;