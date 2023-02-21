import { MessageList } from "../feed/MessageList.js"

const applicationElement = document.querySelector(".giffygram")

export const NavBar = () => {
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
</section>`
}

document.addEventListener('click', (click) => {
    if (click.target.id.startsWith("notification--")) {
        
    }
})
