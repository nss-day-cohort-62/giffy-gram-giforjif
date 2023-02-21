/*
Import get function for messages
Create function that converts each message into HTML list element
Create/export function that copies 
*/

import { getMessages, getUsers, deleteMessage } from "../data/provider.js"
const applicationElement = document.querySelector(".giffygram")

const convertMessageToListElement = (message) => {
    const users = getUsers()
    let author = null
    for (const user of users) {
        if (user.id === message.senderUserId) {
            author = user
        }
    }
/* dateCreated returns undefined. For some reason the giffygram.json database 
doesn't update the code below when changes are made
*/
    return `
    <li class="message" name="message" value="${message.id}"/>
    <div class="message__author">${author.name}</div>
    <div class="messageContent">${message.content}</div>
    <div class="messageDate">Received: ${message.dateCreated}</div>
    <img src="images/block.svg" class="message__delete"id="message--${message.id}">
    </li>
    `
}

export const MessageList = () => {
    const messages = getMessages()

    let html = `
        <ul class="messages">
            ${messages.map(convertMessageToListElement).join("")
        }
        </ul>`
    
    return html
}

applicationElement.addEventListener("click", click => {
    if (click.target.id.startsWith("message--")) {
        const [, messageId] = click.target.id.split("--")
        deleteMessage(parseInt(messageId))
    }
})
