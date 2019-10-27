const remoteURL = "http://localhost:5002"


let API = {
    get(resource, id) {
        return fetch(`${remoteURL}/${resource}/${id}`).then(response => response.json())
    },
    getAndExpand(id, resource, expanded) {
        return fetch(`${remoteURL}/${resource}/${id}?_expand=${expanded}`).then(response => response.json())
    },
    getAll(resource) {
        return fetch(`${remoteURL}/${resource}`).then(response => response.json())
    },
    artistSearch(record) {
        return fetch(`https://api.discogs.com//database/search?q=${record}&type=release&release_title&year&per_page=100&key=XpZKbUzVMscaspKViTxy&secret=PgEALtXymYNUFVbCRWYnoEMunqZMMCTC`).then(response => response.json())
    },
    releaseSearch(release) {
        return fetch(`https://api.discogs.com/artists/${release}/releases&key=XpZKbUzVMscaspKViTxy&secret=PgEALtXymYNUFVbCRWYnoEMunqZMMCTC`).then(response => response.json())
    },
    saveRecord: recordSave => {
        return fetch("http://localhost:5002/catalogue", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recordSave)
        }).then(response => response.json());
    },

    delete(resource, id) {
        return fetch(`${remoteURL}/${resource}/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    },
    post(resource, newObject) {
        return fetch(`${remoteURL}/${resource}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObject)
        }).then(response => response.json())
    },
    update(resource, editedObject) {
        return fetch(`${remoteURL}/${resource}/${editedObject.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedObject)
        }).then(response => response.json());

    }


}

export default API