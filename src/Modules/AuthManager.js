const remoteURL = "http://localhost:5002"

export default {
    createUser(user) {
        return fetch(`${remoteURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(Response => Response.json())
    },
    getUserData() {
        return fetch(`${remoteURL}/users`)
            .then(data => data.json())
    },
    setUser(authObj) {

        sessionStorage.setItem(
            "credentials",
            JSON.stringify(authObj)
        )
        this.setState({
            user: this.isAuthenticated(),
            userId: authObj.id
        });
    },
    getUser(userName) {
        return fetch(`${remoteURL}/users?userName=${userName}`).then(result =>
            result.json())
    },
    getUserEmail(email) {
        return fetch(`${remoteURL}/users?email=${email}`).then(result => result.json())
    },
}