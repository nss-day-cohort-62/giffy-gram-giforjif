import { MessageList } from "./feed/MessageList.js"

import { PostList } from "./feed/PostList.js"
import { PostForm } from "./feed/PostEntry.js"
import { messageForm } from "./message/MessageForm.js"
import { NavBar} from "./nav/NavBar.js"
import { Footer } from "./nav/Footer.js"

export const GiffyGram = () => {

    // Show main main UI
    return `
    <section>
    ${NavBar()}
    </section>
    <section class="messages_listed">
        <h2>Message List</h2>
        ${messageForm()}
        ${MessageList()}
    </section>
    <section>
        <h2>Feed</h2>
        ${PostForm()}
        ${PostList()}
    </section>
    <section>
    ${Footer()}
    </section>
`
}
