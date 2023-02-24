//getFavorites, getPosts needs to be imported
import { getUsers, setSelectUser, getPosts, getFavorites, getSelectUsers, getSelectYear, setSelectYear } from "../data/provider.js"
import { favoritePost } from "../feed/PostList.js"

// Need a function to count unique dates by year and number of posts since year
//  const postDate = () => {
//     const posts = getPosts()
//     let datePosted = `<select name="yearSelection" class="yearSelection"><option value="0">Choose Year</option>`
//     //iterate through posts to get date, which is a timestamp
//     //then change timestamp to year for comparison, using .getFullYear method
//         for (const post of posts)  {
//         post.date = new Date(post.date).getFullYear()
//           //then, filter through posts to return only unique years
//             const uniqueDates = [...new Set(posts.date)]
//             //use new array to build select options
//               for (const yearPost of uniqueDates) {
//                 datePosted += `<option value=${yearPost.id}>${yearPost.date}</option>`
//               }
//             }
//             datePosted += `</select>`;
//             return datePosted
// }

const usersChoice = () => {
  const users = getUsers()
  let usersChoice = `<select name="authorUser" id="select__user">
  <option value="0">Choose User</option>
${users
      .map(users => {
        return `<option value="${users.id}">${users.name}</option>`;
      })
      .join("")}
</select>`;
  return usersChoice;
}

// const yearChoice = () => {
//   let yearChoice = `<select name="yearChoice" id="select__year">
//       <option value="2021">2021</option>
//       <option value="2022">2022</option>
//       <option value="2023">2023</option>
// </select>`
//   return yearChoice
// }

// const yearCount = () => {
//   let selectYear = []
//   const posts = getPosts()
//   for (const post of posts) {
//     if (post.date.includes("2023")) {
//       selectYear.push(post)
//     }
//   }
//   return selectYear.length
// }

let years = [2023, 2022, 2021]

const yearChoice = () => {
  let yearHTML = ""
    yearHTML += `<select name="yearChoice" id="select__year">
    <option value="0">Choose Year</option>
      ${years.map(year => {
      return `<option value="${year}">${year}</option>`
    }).join("")}
  </select>`
  return yearHTML
}

export const yearPostList = () => {
  let html = ""
  const currentUser = localStorage.getItem("gg_user")
  const selectYear = getSelectYear()
  const posts = getPosts().sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  for (const post of posts) {
    const user = getUsers().find((user) => user.id === post.userId)
     if (post.date.includes(selectYear)) {
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
  return html
}

export const YearCount = () => {
  let yearCount = [];
  const posts = getPosts()
  let selectYear = getSelectYear()
  let htmlYearCount = ''

  for (const post of posts) {
    if (post.date.includes(selectYear)) {
        yearCount.push(post)
    }
}
  return htmlYearCount = yearCount.length;
};

const yearHTML = () => {
  let html = `<span id="yearCount" class="postCount">${YearCount()}</span>`
  return html
}

document.addEventListener("change", changeEvent => {
  if (changeEvent.target.id === "select__year") {
    setSelectYear(parseInt(changeEvent.target.value))
    const SelectedYear = document.querySelector("#yearCount")
    SelectedYear.innerHTML = yearHTML();
  }
})

export const Footer = () => {
  let footerHTML = ``
  footerHTML += `<footer class="footer">
 <div class="footer__item">
 Posts in ${yearChoice()}
 <span id="yearCount" class="postCount"></span>
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
  const posts = getPosts().sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  for (const post of posts) {
    const user = getUsers().find((user) => user.id === post.userId)
     if (selectUser === user.id) {
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
 return html
}

export const FavoritesList = () => {
  let html = ``
  const currentUser = localStorage.getItem("gg_user")
  const favorites = getFavorites()

  const posts = getPosts().sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  for (const post of posts) {
    const user = getUsers().find((user) => user.id === post.userId);
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

