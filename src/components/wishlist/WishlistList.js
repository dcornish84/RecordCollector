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

    handleDelete = id => {
        //invoke the delete function in APIManger and re-direct to the CatalogueList.
        this.setState({ loadingStatus: true })
        API.delete("wishlist", id)
            .then(() => {
                this.getData()
            })
    }



    componentDidMount() {
        //getAll from APIManager and hang on to that data; put it in state
        let userId = parseInt(sessionStorage.getItem('credentials'));
        API.getAllWishlist(userId)
            .then(wishlist => {
                console.log("hello", wishlist)
                this.setState({
                    wishlist: wishlist
                })
            })
    }


    render() {
        return (
            <>

                <div>
                    {this.state.wishlist.map(record => {
                        return record.status === "true" ?

                            <WishlistCard
                                key={record.id}
                                wishlistId={record.id}
                                getData={this.getData}
                                artist={record.artist}
                                title={record.title}
                                image={record.image}
                                year={record.year}
                                notes={record.notes}
                                status={record.status}
                                handleDelete={this.handleDelete}
                                {...this.props}
                                className="card" />
                            : null
                    }
                    )}
                </div>

            </>
        )
    }
}




export default WishlistList