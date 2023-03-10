import { MessageList } from "../feed/MessageList.js"
import { MessageCount } from "../feed/MessageList.js"

const applicationElement = document.querySelector(".giffygram")

export const NavBar = () => {
    return `
    <section class="navigation navigation__item">
    <div>
        <img class="navigation__icon" id="navigation__logo" src="images/pb.png">
    </div>
    <div>
        <div class="navigation__name" id="navigation__home" href="">Giffygram</div>
    </div>
    <div class="navigation__message">
        <img class="navigation__icon" id="directMessageIcon" src="images/fountain-pen.svg">
        <div class="notification__count" id="notification">${MessageCount()}</div>
    </div>
    <a id="logoutLink" class="navigation__logout" href="">Logout</a>
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
