/* This module will be responsible for getting Posts and displaying them.
The module needs to display (in this order): The title of the post, the gif, the description,
and "Posted by userId on date_created"
Each post should have a button to mark the post as a favorite and a button that allows the
posting user to delete the post from the database.
It should display the posts in reverse chronological order starting with most recent first.
*/
// need to write and import deletePost in/from provider.js or 
// add deletePost function in this module
import { getPosts, getUsers, deletePost, sendFavorites, deleteFavorites, getFavorites } from "../data/provider.js";

const applicationElement = document.querySelector(".giffygram");

export const PostList = () => {
  let html = "";

  const posts = getPosts().sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  for (const post of posts) {
    const user = getUsers().find((user) => user.id === post.userId);

    html += `
      <div class="post">
        <h2 class="post__remark">${post.title}</h2>
        <img src="${post.link}" alt="Post Gif" class="post__image">
        <p class="post__tagline">${post.story}</p>
        <p class="post__info">Posted by <a href="#test">${user.name}</a> on ${post.date}</p>
        <div class="post__actions">
        ${favoritePost(post)}
      ${post.userId === parseInt(localStorage.getItem("gg_user"))
        ? `<img src="images/block.svg" class="post__delete" id="delete--${post.id}">`
        : ""
      }
        </div>
      </div>
    `;
  }

  return html;
};

applicationElement.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id.startsWith("delete--")) {
    const [, postId] = clickEvent.target.id.split("--");

    deletePost(parseInt(postId)).then(() => {
      applicationElement.dispatchEvent(new CustomEvent("stateChanged"));
    });
  }
});



applicationElement.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id.startsWith("favoriteBlank--")) {
    const [, postId] = clickEvent.target.id.split("--");

    const userPostId = postId
    const userId = localStorage.getItem("gg_user")

    const dataToSendToAPI = {
      userId: parseInt(userId),
      postId: parseInt(userPostId)
    }

    sendFavorites(dataToSendToAPI) // wait for the API call to finish before continuing
  }
})

const favoritePost = (post) => {
  let html = `<img src="images/favorite-star-blank.svg"
  class="post__favorite" id="favoriteBlank--${post.id}">`
  const favorites = getFavorites()
  const user = localStorage.getItem("gg_user")
  for (const favorite of favorites) {
    if (favorite.postId === post.id && favorite.userId === parseInt(user)) {
      html = `<img src="images/favorite-star-yellow.svg"
        class="post__favorite" id="favoriteYellow--${post.id}">`
    }
  }
  return html
}

applicationElement.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id.startsWith("favoriteYellow--")) {
    const [, postId] = clickEvent.target.id.split("--");

    deleteFavorites(postId).then(() => {
      applicationElement.dispatchEvent(new CustomEvent("stateChanged"));
    });
  }
});

