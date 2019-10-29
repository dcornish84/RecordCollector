import React, { Component } from 'react';
import API from "./../../Modules/APIManager"
import WishlistList from "./WishlistList"


class WishlistDetails extends Component {
    state = {
        wishlist: [],
        userId: "",
        title: "",
        artist: "",
        year: "",
        image: "",
        comments: "",
        loadingStatus: true,
    }

    handleDelete = () => {
        //invoke the delete function in APIManger and re-direct to the CatalogueList.
        this.setState({ loadingStatus: true })
        API.delete("wishlist", this.props.id)
            .then(() => this.props.history.push("/wishlist"))
    }

    getData = () => {
        let userId = this.props.getUser()
        API.getAll("wishlist", sessionStorage.getItem("credentials")).then(
            wishlist => {
                this.setState({
                    wishlist: wishlist,
                    user: userId,
                });
            }
        );
    };

    componentDidMount() {
        this.getData();
    }


    render() {

        return (
            <>
                <div className="container">
                    <div className="text-block">
                        <section className="wishlistDetail">
                            <WishlistList
                                artist={this.state.artist}
                                title={this.state.release_title}
                                date={this.state.year}
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