import { MessageList } from "./feed/MessageList.js"
import { PostList } from "./feed/PostList.js"
import { messageForm } from "./message/MessageForm.js"
import { NavBar } from "./nav/NavBar.js"
import { Footer, FavoritesList, AuthorPostList } from "./nav/Footer.js"
import { Post } from "./feed/Post.js"
import { getSelectUsers, getUsers, setSelectUser } from "./data/provider.js"


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
const selectUser = getSelectUsers()


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
         MessageFeed.innerHTML = MessageList();
    }
})

//checkbox event listener to filter by favorites
applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "yourFavorites") {
        if (clickEvent.target.checked) {
            const FavoriteFeed = document.querySelector("#feed");
            FavoriteFeed.innerHTML = FavoritesList();
        } 
    }
})

document.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "select__user") {
      setSelectUser(parseInt(changeEvent.target.value))
      const SelectedUser = document.querySelector("#feed")
      SelectedUser.innerHTML = AuthorPostList();
    }
  })

  //Sandbox an event listener to add MessageRead property to messages to decriment the notification number in navbar
// applicationElement.addEventListener('click', (click) => {
//     if (click.target.id === "notification") {
//         MessageRead();
//     }
// })