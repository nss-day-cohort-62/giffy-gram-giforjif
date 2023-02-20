import { MessageList } from "./feed/MessageList.js"

export const GiffyGram = () => {

    // Show main main UI
    return `
    <section class="navigation navigation__item">
        <div>
            <img class="navigation__icon" src="images/pb.png">
        </div>
        <div>
            <div class="navigation__name" href="#home">Giffygram</div>
        </div>
        <div class="navigation__message">
            <img class="navigation__icon" id="directMessageIcon" src="images/fountain-pen.svg">
            <div class="notification__count">0</div>
        </div>
        <a class="navigation__logout" href="#logout">Logout</a>
    </section>
    <section class="messages_listed">
        <h2>Message List</h2>
        ${MessageList()}
`
}
