/* 1) Transient state. 
2) Resembles the Letter textbox from Pen Pals module. 
3) Would need the save function in this module */

import { getUsers, sendMessages } from "../data/provider.js"

const applicationElement = document.querySelector(".giffygram")


export const messageForm = () => {
    const users = getUsers()

    let html = `
        <h2>Direct Message</h2>
        <button class="button" id="exitScreen">x</button>
        <div class="field">
            <label class="label" for="recipient">Recipient</label>
                <select class="label" name="recipient" id="recipient">
                    <option value="">Choose a recipient</option>
                    ${users.map(user => {
                        return `<option name="recipient" value="${user.id}">${user.name}</option>`
                    }).join("")}
                </select>
        </div>
        <div class="field">
            <label class="label" for="letter">Message:</label>
            <textarea id="story" name="message" rows="2" cols="25" placeholder="Message to user"></textarea>
        </div>
        <button class="button" id="saveMessage">Save</button>
        <button class="button" id="cancelMessage">Cancel</button>
        </section>
    `

    return html
}


applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveMessage") {
        // Get what the user typed into the form fields
        const userName = document.querySelector("select[name='recipient']").value
        const message = document.querySelector("textarea[name='message']").value
        const userSender = localStorage.getItem("gg_user")
        // Make an object out of the user input
        const dataToSendToAPI = {
            senderUserId: parseInt(userSender),
            receiverUserId: parseInt(userName),
            content: message,
            dateCreated: Date.now()
        }

        // Send the data to the API for permanent storage
        sendMessages(dataToSendToAPI)
    }
    else if (clickEvent.target.id === "cancelMessage") {
        document.querySelector("select[name='recipient']").value = ""
        document.querySelector("textarea[name='message']").value = ""
    }
    else if (clickEvent.target.id === "exitScreen") {
        window.close() //Error message on console: 'Scripts may close only the windows that were opened by them.' So I am assuming that i would need the other modules to work before this function can.
        // location.reload()
    }
})
