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
                    {this.state.wishlists.map(record => {
                        return record.status === "true" ?

                            <WishlistCard
                                key={record.id}
                                id={record.id}
                                getData={this.getData}
                                artist={record.artist}
                                title={record.title}
                                image={record.image}
                                date={record.year}
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