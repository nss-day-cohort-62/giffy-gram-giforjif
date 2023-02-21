import { MessageList } from "./feed/MessageList.js"

import { PostList } from "./feed/PostList.js"
import { messageForm } from "./message/MessageForm.js"
import { NavBar} from "./nav/NavBar.js"
import { Footer } from "./nav/Footer.js"
import { Post } from "./feed/Post.js"

export const GiffyGram = () => {

    // Show main main UI
    return `
    <section>
    ${NavBar()}
    </section>
    <div id="messageForm"></div>
    <section class="messages_listed">
    </section>
    <section id="feed" class="giffygram__feed">
        ${Post()}
        ${PostList()}
    </section>
    <section>
    ${Footer()}
    </section>
`
}

const applicationElement = document.querySelector(".giffygram");

applicationElement.addEventListener('click', (click) => {
    if (click.target.id === "directMessageIcon") {
        const DMForm = document.querySelector("#messageForm");
        if (DMForm.innerHTML === "") {
            DMForm.innerHTML = messageForm();
        } else {
            DMForm.innerHTML = "";
        }
    }
})

applicationElement.addEventListener('click', (click) => {
    if (click.target.id === "notification") {
        const MessageFeed = document.querySelector("#feed");
        // if (MessageFeed.innerHTML === "") {
            MessageFeed.innerHTML = MessageList();
    //     } else {
    //         MessageFeed.innerHTML = "";
    //     }
    }
})
