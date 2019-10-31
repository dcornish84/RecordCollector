import React, { Component } from 'react';
import API from '../../Modules/APIManager'
import { Card, CardTitle, CardSubtitle, Button, CardImg, CardBody, CardText } from "reactstrap";



class WishlistCard extends Component {
    state = {
        userId: parseInt(sessionStorage.getItem("credentials")),
        title: "",
        id: "",
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

    addToCatalogue = () => {
        this.setState({ loadingStatus: true });
        let userId = parseInt(sessionStorage.getItem('credentials'));
        const newCat = {
            title: this.state.title,
            year: this.state.year,
            image: this.state.image,
            notes: this.state.notes,
            status: this.state.status,
            userId: userId
        }
        console.log("hey this sucks", newCat)
        API.post("catalogue", newCat)
            .then(() => {
                API.delete("wishlist", this.props.wishlistId)
                    .then(() => this.props.history.push("/catalogue"))
            })
    }

    componentDidMount() {
        this.setState({
            title: this.props.title,
            year: this.props.year,
            image: this.props.image,
            notes: this.props.notes,
            status: this.props.status,
        })
    }




    render() {
        return (
            <div><Card className="card">

                <CardBody className="wishlistCard">
                    <CardTitle> <span className="cardRecordName">{this.props.title}</span></CardTitle>
                    <CardSubtitle> {this.props.date} </CardSubtitle >
                    <CardImg src={this.props.image}></CardImg>
                    <CardText> {this.props.notes}</CardText>
                    <Button type="button" onClick={() => { this.props.history.push(`/wishlist/${this.props.id}/edit`) }}>Update Notes</Button>
                    <Button type="button" onClick={this.addToCatalogue}>Got It!</Button>
                    <Button type="button" onClick={() => this.props.handleDelete(this.props.id)}>Delete</Button>
                </CardBody>
            </Card>
            </div >
        );
    }
}

export default WishlistCard;