//getFavorites, getPosts needs to be imported
import { getUsers, setSelectUser, getPosts, getFavorites, getSelectUsers } from "../data/provider.js"
import { favoritePost, PostList } from "../feed/PostList.js"

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
  let usersChoice = `<select name="authorUser">
${users
      .map((users) => {
        return `<option id="select__user" value=${users.id}>${users.name}</option>`;
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
 <div class="footer__item" id="userChoice">
 Posts by user ${usersChoice()}
 </div>
 <div class="footer__item" id="footerBox">
 <input type="checkbox" class="showOnlyFavorites" id="yourFavorites" />Show Only Favorites</input>
 </div>
 </footer>`
  return footerHTML
}

//Author Toggling:

export const AuthorPostList = () => {
  let html = ``
  const currentUser = localStorage.getItem("gg_user")
  const selectUser = getSelectUsers()
  const users = getUsers()
  const posts = getPosts().sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  for (const user of users) {
    if (selectUser === user.id) {
      for (const post of posts) {
    // const user = getUsers().find((user) => user.id === post.userId)
      if (post.userId === user.id) {
        html += `<div class="post">
        <h2 class="post__remark">${post.title}</h2>
        <img src="${post.link}" alt="Post Gif" class="post__image">
        <p class="post__tagline">${post.story}</p>
          <p class="post__info">Posted by <a href="#test">${user.name}</a> on ${post.date}</p>
        <div class="post__actions">
        ${favoritePost(post)}
      ${post.userId === parseInt(currentUser)
            ? `<img src="images/block.svg" class="post__delete" id="delete--${post.id}">`
            : ""
          }
        </div>
      </div>`
      }
    }
    }
  }
return html
}


//Favorites Toggling:
document.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "yourFavorites") {
    const CheckedBox = document.querySelector("#footerBox")
    CheckedBox.innerHTML = `<input type="checkbox" class="showOnlyFavorites" id="yourFavorites" checked />Show Only Favorites</input>`
  }
})

export const FavoritesList = () => {
  let html = ``
  const currentUser = localStorage.getItem("gg_user")
  const favorites = getFavorites()

  const posts = getPosts().sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  for (const post of posts) {
    // const user = getUsers().find((user) => user.id === post.userId);
    for (const favorite of favorites) {
      if (post.id === favorite.postId && parseInt(currentUser) === favorite.userId) {
        html += `<div class="post">
        <h2 class="post__remark">${post.title}</h2>
        <img src="${post.link}" alt="Post Gif" class="post__image">
        <p class="post__tagline">${post.story}</p>
          <p class="post__info">Posted by <a href="#test">${user.name}</a> on ${post.date}</p>
        <div class="post__actions">
        ${favoritePost(post)}
      ${post.userId === parseInt(currentUser)
            ? `<img src="images/block.svg" class="post__delete" id="delete--${post.id}">`
            : ""
          }
        </div>
      </div>`
      }
    }
  }
return html
}


//need event listener that changes posts feed based on users
document.addEventListener("change", changeEvent => {
  if (changeEvent.target.id === "select__user") {
    setSelectUser(parseInt(changeEvent.target.value))

  }
})



//need event listener that changes posts feed based on date
