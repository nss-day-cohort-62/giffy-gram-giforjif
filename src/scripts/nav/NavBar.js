import { MessageList } from "../feed/MessageList.js"

const applicationElement = document.querySelector(".giffygram")

export const NavBar = () => {
    return `
    <section class="navigation navigation__item">
    <div>
        <img class="navigation__icon" id="navigation__logo" src="images/pb.png">
    </div>
    <div>
        <div class="navigation__name" id="navigation__home" href="#home">Giffygram</div>
    </div>
    <div class="navigation__message">
        <img class="navigation__icon" id="directMessageIcon" src="images/fountain-pen.svg">
        <div class="notification__count" id="notification">0</div>
    </div>
    <a class="navigation__logout" href="#logout">Logout</a>
</section>`
}

applicationElement.addEventListener('click', (click) => {
    if (click.target.id === "navigation__logo" || "navigation__home") {
        location.reload()
    }
})
