/* 1) Provider.js needs get & fetch functions.
2) Import all fetch functions */

import { GiffyGram } from "./GiffyGram.js"
import { LoginForm } from "./auth/Login.js"
import { fetchFavorites, fetchMessages, fetchPosts, fetchUsers } from "./data/provider.js"

const applicationElement = document.querySelector(".giffygram")

export const renderApp = () => {
    const user = parseInt(localStorage.getItem("gg_user"))
    Promise.all([fetchPosts(), fetchMessages(), fetchUsers(), fetchFavorites()])
        .then(
                () => {
                        if (user) {
                            applicationElement.innerHTML = GiffyGram()
                        }   
                        else {
                            applicationElement.innerHTML = LoginForm()
                        }
                })
            }

            
renderApp()

applicationElement.addEventListener(
    "stateChanged",
    customEvent => {
        renderApp()
    }
)
