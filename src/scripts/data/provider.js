//Refer back to data access

const apiURL = "http://localhost:3000"
const applicationElement = document.querySelector(".giffygram")


const applicationState = {
    currentUser: {},
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

export const deleteMessage = (id) => {
    return fetch(`${apiURL}/messages/${id}`, { method: "DELETE" })
        .then(
            () => {
                applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}



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



export const deleteMessages = (id) => {
    return fetch(`${apiURL}/messages/${id}`, { method: "DELETE" })
        .then(
            () => {
                applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

export const getChosenUser = () => {
    return applicationState.chosenUser.map(user => ({...user}))
}

export const setChosenUser = (userId) => {
    applicationState.selectedUser = userId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}


// //function to toggle favorites button in footer and change displayFavorites in applicationState
// export const toggleFavorites = (chosenUser) => {
//  user.id && (applicationState.feed.displayFavorites = null),

// }

// //
// export const toggleFavoritesOnly = _0x5d49fa=>{
//     const _0x2fc536 = a4_0x1b8202;
//     _0x5d49fa && (applicationState[_0x2fc536(0x1e0)][_0x2fc536(0x1c6)] = null),
//     applicationState[_0x2fc536(0x1e0)]['displayFavorites'] = _0x5d49fa;
// }

// export const getShowFavorites = ()=>{
//     const _0x4945df = a4_0x1b8202;
//     return applicationState[_0x4945df(0x1e0)]['displayFavorites'];

export const deletePost = (id) => {
    return fetch(`${apiURL}/posts/${id}`, { method: "DELETE" })
        .then(
            () => {
                applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}
