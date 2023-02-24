const apiURL = "http://localhost:3000"
const applicationElement = document.querySelector(".giffygram")


const applicationState = {
    currentUser: {},
    selectUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    },
    messages: [],
    posts: [],
    users: [],
    favorites: []
}



//Fetch from API
export const fetchUsers = () => {
    return fetch(`${apiURL}/users`)
        .then(response => response.json())
        .then(
            (userData) => {
                applicationState.users = userData
            }
        )
}
export const fetchPosts = () => {
    return fetch(`${apiURL}/posts`)
        .then(response => response.json())
        .then(
            (userData) => {
                applicationState.posts = userData
            }
        )
}
export const fetchMessages = () => {
    return fetch(`${apiURL}/messages`)
        .then(response => response.json())
        .then(
            (userData) => {
                applicationState.messages = userData
            }
        )
}
export const fetchFavorites = () => {
    return fetch(`${apiURL}/favorites`)
        .then(response => response.json())
        .then(
            (userData) => {
                applicationState.favorites = userData
            }
        )
}



//Map of transient state
export const getMessages = () => {
    return applicationState.messages.map(message => ({...message}))
}
export const getUsers = () => {
    return applicationState.users.map(user => ({...user}))
}
export const getPosts = () => {
    return applicationState.posts.map(post => ({...post}))
}
export const getFavorites = () => {
    return applicationState.favorites.map(favorite => ({...favorite}))
}
export const getSelectUsers = () => {
    return applicationState.selectUser
}



//Create new entries in API
export const sendMessages = (userDirectMessage) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userDirectMessage)
    }


    return fetch(`${apiURL}/messages`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    })
} 
export const sendPosts = (userPostSent) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userPostSent)
    }


    return fetch(`${apiURL}/posts`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const sendUser = (userLogin) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userLogin)
    }


    return fetch(`${apiURL}/users`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    })
}
export const sendFavorites = (userFavorites) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userFavorites)
    }


    return fetch(`${apiURL}/favorites`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    })
}




//Delete entries from API
export const deleteFavorites = (id) => {
    return fetch(`${apiURL}/favorites/${id}`, { method: "DELETE" })
        .then(
            () => {
                applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}
export const deleteMessage = (id) => {
    return fetch(`${apiURL}/messages/${id}`, { method: "DELETE" })
        .then(
            () => {
                applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}
export const deletePost = (id) => {
    return fetch(`${apiURL}/posts/${id}`, { method: "DELETE" })
        .then(
            () => {
                applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}


//Set transient state in applicationState
export const setSelectUser = (userId) => {
    applicationState.selectUser = userId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}


