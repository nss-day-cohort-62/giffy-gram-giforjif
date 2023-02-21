/* in this module we will need to define a function that produces 
a button labeled "Have a GIF to post?"
This button will be responsible for generating the form from PostEntry.js
The button needs a clickEventListener that toggles show/hide on the form.
*/

import { PostForm } from "./PostEntry.js";

const applicationElement = document.querySelector(".giffygram");

export const Post = () => {
  let html = `
    <button id="miniMode">Have a GIF to post?</button>
    <div id="postForm__container"></div>
  `;

applicationElement.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "miniMode") {

        clickEvent.target.remove()

        const postFormContainer = document.querySelector("#postForm__container");

        if (postFormContainer.innerHTML === "") {
            postFormContainer.innerHTML = PostForm();
        } else {
            postFormContainer.innerHTML = "";
        }
    }
});

  return html;
};
