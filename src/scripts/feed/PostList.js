/* This module will be responsible for getting Posts and displaying them.
The module needs to display (in this order): The title of the post, the gif, the description,
and "Posted by userId on date_created"
Each post should have a button to mark the post as a favorite and a button that allows the
posting user to delete the post from the database.
It should display the posts in reverse chronological order starting with most recent first.
*/
// need to write and import deletePost in/from provider.js or 
// add deletePost function in this module
import { getPosts, getUsers } from "../data/provider.js";

const applicationElement = document.querySelector(".giffygram");

export const PostList = () => {
  let html = "";

  const posts = getPosts().sort((a, b) => {
    return new Date(b.date_created) - new Date(a.date_created);
  });

  for (const post of posts) {
    const user = getUsers().find((user) => user.id === post.userId);

    html += `
      <div class="post">
        <h2 class="post__title">${post.title}</h2>
        <img src="${post.gifUrl}" alt="Post Gif" class="post__gif">
        <p class="post__description">${post.description}</p>
        <p class="post__info">Posted by ${user.name} on ${post.date_created}</p>
        <button class="post__favorite" id="favorite--${post.id}">Favorite</button>
        ${
            //The following code should be able to determin the active userId and 
            //display a delete box on each post that the active user has posted.
          post.userId === parseInt(localStorage.getItem("gg_user"))
            ? `<button class="post__delete" id="delete--${post.id}">Delete</button>`
            : ""
        }
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
