import React, { Component } from 'react';
import WishlistCard from "./WishlistCard";
import API from '../../Modules/APIManager';


class WishlistList extends Component {
    //This holds the state of the Catalogue
    state = {
        wishlists: [],
        loadingStatus: true,
    }

    getData = () => {
        let userId = parseInt(sessionStorage.getItem('credentials'));
        API.getAllWishlist(userId).then(wishlists => {
            this.setState({
                wishlists: wishlists
            });
        });
    };



    componentDidMount() {
        //getAll from APIManager and hang on to that data; put it in state
        let userId = parseInt(sessionStorage.getItem('credentials'));
        API.getAllWishlist(userId)
            .then(wishlists => {
                this.setState({
                    wishlists: wishlists
                })
            })
    }


    render() {
        return (
            <>
                <div>
                    {/* <Button color="danger" onClick={() => { this.props.history.push("/catalogue") }}>Add to Catalogue</Button> */}
                </div>
                <div>
                    {this.state.wishlists.map(record =>
                        <WishlistCard
                            key={record.id}
                            userId={this.props.userID}
                            getData={this.getData}
                            artist={record.artist}
                            title={record.title}
                            date={record.year}
                            image={record.image}
                            deleteEvent={this.deleteEvent}
                            {...this.props}
                            className="card" />)}
                </div>

            </>
        )
    }
}




export default WishlistList