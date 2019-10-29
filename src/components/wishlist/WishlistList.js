import React, { Component } from 'react';
import WishlistCard from "./WishlistCard";
import API from '../../Modules/APIManager';


class WishlistList extends Component {
    //This holds the state of the Catalogue
    state = {
        wishlist: [],
        loadingStatus: true,
    }

    getData = () => {
        let userId = parseInt(sessionStorage.getItem('credentials'));
        API.getAllWishlist(userId).then(wishlist => {
            this.setState({
                wishlist: wishlist
            });
        });
    };



    componentDidMount() {
        //getAll from APIManager and hang on to that data; put it in state
        let userId = parseInt(sessionStorage.getItem('credentials'));
        API.getAllWishlist(userId)
            .then(wishlist => {
                this.setState({
                    wishlist: wishlist
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
                    {this.state.wishlist.map(record =>
                        <WishlistCard
                            key={record.id}
                            userId={this.props.user.id}
                            getData={this.getData}
                            artist={record.artist}
                            title={record.title}
                            date={record.year}
                            deleteEvent={this.deleteEvent}
                            {...this.props}
                            className="card" />)}
                </div>

            </>
        )
    }
}




export default WishlistList