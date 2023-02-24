/*
Import get function for messages
Create function that converts each message into HTML list element
Create/export function that copies 
*/

import { getMessages, getUsers, deleteMessage } from "../data/provider.js"
const applicationElement = document.querySelector(".giffygram")
const currentUser = localStorage.getItem("gg_user")

const convertMessageToListElement = (message) => {
    let html = ""
    const users = getUsers()
    let author = null
    for (const user of users) {
        if (user.id === message.senderUserId) {
            author = user
        }
    }
    if (message.receiverUserId === parseInt(currentUser)){
        html = `
        <li class="message" name="message" value="${message.id}"/>
        <div class="message__author">${author.name}</div>
        <div class="messageContent">${message.content}</div>
        <div class="messageDate">Received: ${message.dateCreated}</div>
        <img src="images/block.svg" class="message__delete"id="message--${message.id}">
        </li>
        `
    }
/* dateCreated returns undefined. For some reason the giffygram.json database 
doesn't update the code below when changes are made
*/
   return html
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

export const MessageCount = () => {
    let messages = getMessages();
    let messageCount = [];
    let htmlCount = ``
  
    for (const message of messages) {
      if (message.receiverUserId === parseInt(currentUser)) {
          // if (message.messageRead === false)
        messageCount.push(message);
      }
  }
    return htmlCount = messageCount.length;
  };
  
  // Sandbox to filter messages by a "read" property to be added
  // export const MessageRead = () => {
  //     const messages = getMessages()
  //     for (const message of messages) {
  //         if (message.read === false) {
  //         message.read = true
  //         }
  // }
  // return messages
  // }