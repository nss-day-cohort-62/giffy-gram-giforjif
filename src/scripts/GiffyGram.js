import { MessageList } from "./feed/MessageList.js"
import { PostList } from "./feed/PostList.js"
import { messageForm } from "./message/MessageForm.js"
import { NavBar } from "./nav/NavBar.js"
import { Footer, FavoritesList, AuthorPostList, yearPostList } from "./nav/Footer.js"
import { Post } from "./feed/Post.js"
import { getSelectUsers, getUsers, setSelectUser, setSelectYear } from "./data/provider.js"


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
         MessageFeed.innerHTML = MessageList();
    }
})

//checkbox event listener to filter by favorites
applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "yourFavorites") {
        const CheckedBox = document.querySelector("#footerBox")
        CheckedBox.innerHTML = `<input type="checkbox" class="showOnlyFavorites" id="yourFavoritesChecked" checked />Show Only Favorites</input>`
      }
    if (clickEvent.target.id === "yourFavorites") {
        if (clickEvent.target.checked) {
            const FavoriteFeed = document.querySelector("#feed");
            FavoriteFeed.innerHTML = 
            `${Post()}
            ${FavoritesList()}`
        } 
    }
})

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "yourFavoritesChecked") {
        const CheckedBox = document.querySelector("#footerBox")
        CheckedBox.innerHTML = `<input type="checkbox" class="showOnlyFavorites" id="yourFavorites" />Show Only Favorites</input>`
      }
    if (clickEvent.target.id === "yourFavoritesChecked") {
        if (clickEvent.target.checked === false) {
            const FavoriteFeed = document.querySelector("#feed");
            FavoriteFeed.innerHTML =
            `${Post()}
            ${PostList()}`
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

document.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "select__year") {
      setSelectYear(parseInt(changeEvent.target.value))
      const SelectedYear = document.querySelector("#feed")
      SelectedYear.innerHTML = yearPostList();
    }
  })
  //Sandbox an event listener to add MessageRead property to messages to decriment the notification number in navbar
// applicationElement.addEventListener('click', (click) => {
//     if (click.target.id === "notification") {
//         MessageRead();
//     }
// })