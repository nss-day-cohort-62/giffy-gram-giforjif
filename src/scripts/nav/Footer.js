//getFavorites, getPosts needs to be imported
import { getUsers, getPosts, setChosenUser, getChosenUser, toggleFavorites } from "../data/provider.js"

// Need a function to count unique dates by year and number of posts since year
//  const postDate = () => {
//     const posts = getPosts()
//     let datePosted = `<select name="yearSelection" class="yearSelection"><option value="0">Choose Year</option>`
//     //iterate through posts to get date, which is a timestamp
//     //then change timestamp to year for comparison, using .getFullYear method
//         for (const post of posts)  {
//           post.date.getFullYear() 
//           //then, filter through posts to return only unique years
//             const uniqueDates = [...new Set(posts.date)]
//             //use new array to build select options
//               for (const yearPost of uniqueDates) {
//                 datePosted += '<option value=${yearPost.id}>${yearPost.date}</option>'
//               }
//             }
//             datePosted += `</select>`;
//             return datePosted
// }

const usersChoice = () => {
const users = getUsers()
let usersChoice = `<select name="authorUser" id="select__user">
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
 footerHTML += `<footer class="footer">
 <div class="footer__item">
 Posts since <select><option value="0">Choose Year</option></select>
 <span class="postCount">8</span>
 </div>
 <div class="footer__item">
 Posts by user ${usersChoice()}
 </div>
 <div class="footer__item">
 <input type="checkbox" class="showOnlyFavorites" id="yourFavorites"/>Show Only Favorites</input>
 </div>
 </footer>`
 return footerHTML
}

//checkbox event listener to filter by favorites
document.addEventListener("change", clickEvent => {
    if (clickEvent.target.id === "yourFavorites") {
        if (this.checked) {
            for (const favorite of favorites) {
                if (favorite.userId === parseInt(localStorage.setItem("gg_user"))) {

                }
            }
        }       
    }
})

//need event listener that changes posts feed based on users
document.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "select__user") {
        setChosenUser(parseInt(changeEvent.target.value))

    }
})



//need event listener that changes posts feed based on date