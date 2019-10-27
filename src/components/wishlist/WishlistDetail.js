import React, { Component } from 'react';
import API from "./../../Modules/APIManager"
import WishlistList from "./WishlistList"


class WishlistDetails extends Component {
    state = {
        wishlist: [],
        loadingStatus: true,
    }

    handleDelete = () => {
        //invoke the delete function in APIManger and re-direct to the CatalogueList.
        this.setState({ loadingStatus: true })
        API.delete("wishlist", this.props.id)
            .then(() => this.props.history.push("/wishlist"))
    }

    getData = () => {
        API.getAll("wishlist", sessionStorage.getItem("userId")).then(
            wishlist => {
                this.setState({
                    wishlist: wishlist
                });
            }
        );
    };

    componentDidMount() {
        this.getData();
    }

    newWishlist = () => {
        this.props.getData();
    }

    render() {

        return (
            <>
                <div className="container">
                    <div className="text-block">
                        <section className="wishlistDetail">
                            <WishlistList
                                artist={this.state.artist}
                                title={this.state.title}
                                date={this.state.date}
                                getData={this.getData}
                                {...this.props}
                            />
                        </section>
                    </div>
                </div>
            </>
        );
    }
}

export default WishlistDetails