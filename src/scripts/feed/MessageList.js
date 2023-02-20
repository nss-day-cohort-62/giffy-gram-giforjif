/*
Import get function for messages
Create function that converts each message into HTML list element
Create/export function that copies 
*/

import { getMessages, getUsers } from "../data/provider.js"

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
    <img class="deleteMessage" src="images/block.svg">
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
