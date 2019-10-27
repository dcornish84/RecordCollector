import React, { Component } from 'react';
import WishlistCard from "./WishlistCard";
import API from '../../Modules/APIManager';


class WishlistList extends Component {
    //This holds the state of the Wishlist
    state = {
        wishlist: [],
        loadingStatus: true,
    }

    componentDidMount() {
        //getAll from APIManager and hang on to that data; put it in state
        API.getAllWishlist()
            .then((wishlist) => {
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
                            user={this.props.user}
                            getData={this.getData}
                            artist={record.artist}
                            title={record.release_title}
                            date={record.year}
                            deleteEvent={this.deleteEvent}
                            {...this.props} />)}
                </div>

            </>
        )
    }
}




export default WishlistList