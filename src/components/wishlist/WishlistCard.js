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
        loadingStatus: false,
    }

    handleDelete = () => {
        this.setState({ loadingStatus: true });
        API.delete("wishlist", this.props.wishlist.id)
            .then(() => this.props.history.push("/wishlist")
            );
    };
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
                    <CardTitle>Record: <span className="cardRecordName">{this.props.title}</span></CardTitle>
                    <CardSubtitle>Artist: {this.props.artist} </CardSubtitle >
                    <CardImg src={this.props.image}></CardImg>
                    <Button type="button" onClick={() => { this.props.history.push(`/wishlist/${this.props.wishlist.id}/edit`) }}>Edit Details</Button>
                    <Button type="button" onClick={() => this.handleDelete(this.props.wishlist.id)}>Delete</Button>
                </CardBody>
            </Card>
            </div >
        );
    }
}

export default WishlistCard;