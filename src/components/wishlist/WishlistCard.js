import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import API from '../../Modules/APIManager'
import { Card, CardTitle, CardSubtitle, Button, Media } from "reactstrap";
import CardBody from 'reactstrap/lib/CardBody';
// import CardImg from 'reactstrap/lib/CardImg';

class WishlistCard extends Component {
    state = {
        release_title: "",
        loadingStatus: false,
    }

    handleDelete = () => {
        this.setState({ loadingStatus: true });
        API.delete("wishlist", this.props.release_title)
            .then(() => this.props.history.push("/WishlistDetail")
            );
    };
    getAllWishlist = () => {
        this.setState({ loadingstatus: true });
        API.saveRecord(this.props.release_title)
            .then(() => this.props.getData())
            .then(() => this.props.history.push("/WishlistDetail")
            );
    };

    render() {

        return (
            <div><Card className="card">

                <CardBody className="wishlistCard">
                    <CardTitle>Record: <span className="cardRecordName">{this.props.wishlist}</span></CardTitle>
                    <CardSubtitle>Artist: {this.props.wishlist} </CardSubtitle >
                    {/* <Media src={this.props.record.cover_image}></Media> */}
                    <Button type="button" onClick={() => { this.props.history.push(`/wishlist/${this.props.wishlist.id}/edit`) }}>Edit Details</Button>
                    <Button type="button" onClick={() => this.handleDelete(this.props.wishlist.id)}>Delete</Button>
                </CardBody>
            </Card>
            </div >
        );
    }
}

export default WishlistCard;