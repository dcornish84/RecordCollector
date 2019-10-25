import React, { Component } from 'react';
import API from "./../../Modules/APIManager"
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row } from 'reactstrap';


class CatalogueDetails extends Component {
    state = {
        albumTitle: "",
        artist: "",
        date: "",
        image: "",
        loadingStatus: true,
    }

    handleDelete = () => {
        //invoke the delete function in CatalogueManger and re-direct to the CatalogueList.
        this.setState({ loadingStatus: true })
        API.delete("catalogue", this.props.record.id)
            .then(() => this.props.history.push("/catalogue"))
    }

    componentDidMount() {

        API.get("catalogue", this.props.recordId)
            .then((record) => {
                this.setState({
                    albumTitle: record.albumTitle,
                    artist: record.artist,
                    date: record.date,
                    image: record.image,
                    loadingStatus: false,
                });
            })
    }

    render() {

        return (
            <div>
                <Card className="mainCard">
                    <Row className="flex">
                    </Row>
                    <CardImg className="img" top width="100%" src="" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{this.state.albumTitle}</CardTitle>
                        <CardSubtitle>{this.state.artist}</CardSubtitle>
                        <CardText>{this.state.date}</CardText>
                        <CardText>{this.state.image}</CardText>
                    </CardBody>
                    <Row>
                        <Button type="button" onClick={() => { this.props.history.push(`/catalogue/${this.props.eventId}/edit`) }}>Edit Details</Button>
                        {/*<Button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}><FaRegTrashAlt/></Button> */}
                    </Row>
                </Card>
            </div>
        );
    }
}

export default CatalogueDetails