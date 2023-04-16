import { MessageList } from "../feed/MessageList.js"
import { MessageCount } from "../feed/MessageList.js"

const applicationElement = document.querySelector(".giffygram")

export const NavBar = () => {
    return `
    <section class="navigation navigation__item">
    <div>
        <img class="navigation__icon" id="navigation__logo" src="images/GiffyGram.png">
    </div>
    <div class="navigation__message">
        <img class="navigation__icon" id="directMessageIcon" src="images/fountain-pen.svg">
        <img class="notification__count" id="notification" src="images/messages-icon.png">
    </div>
    <div class="message__number">${MessageCount()}</div>
    <div class="goodbye">
    <a id="logoutLink" class="navigation__logout" href="#logout">Logout</a>
    </div>
</section>`
}

applicationElement.addEventListener('click', (click) => {
    if (click.target.id === "navigation__logo" || click.target.id === "navigation__home") {
        location.reload()
    }
})

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "logoutLink") {
            localStorage.clear()
            document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
        }
})
