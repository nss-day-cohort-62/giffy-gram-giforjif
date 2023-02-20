//getFavorites, getPosts needs to be imported
import { getUsers } from "../data/provider.js"

// Need a function to count unique dates by year and number of posts since year
//  const postDate = () => {
//     const posts = getPosts()
//     let datePosted = `select name="yearSelection" class="yearSelection">`
//         ${posts
//             .map((posts)=>  {
    //need to figure out how to iterate posts by date and if year is unique, push to array for selection
//                 return '<option value=${posts.date}>${posts.date}</option>'
//need to figure out if year is selected, how to sort by year and count all posts from that year to present.

//             })}
//             return datePosted
// }

const usersChoice = () => {
const users = getUsers()
let usersChoice = `<select name="author" class="userSelection">
${users
  .map((users) => {
    return `<option value=${users.id}>${users.name}</option>`;
  })
  .join("")}
</select>`;
return usersChoice;
}

export const Footer = () => {
 let footerHTML = ``
 footerHTML += `<div class="footer__item">
 Posts since <select>Year</select>
 </div>
 <div class="footer__item">
 Posts by user ${usersChoice()}
 </div>
 <div class="footer__item">
 <input type="checkbox" class="showOnlyFavorites" id="yourFavorites"/>Show Only Favorites</input>
 </div>`
 return footerHTML
}

//checkbox event listener
// document.addEventListener("change", clickEvent => {
//     if (clickEvent.target.id === "yourFavorites") {
//         if (this.checked) {
//             for (const favorite of favorites) {
//                 if (favorite.userId === currentUser.id) {

//                 }
//             }
//         }       
//     }
// })

//need event listener that changes posts feed based on users
//need event listener that changes posts feed based on date