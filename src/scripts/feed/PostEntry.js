/* let's start by making a form for uploading a new post.
The form will need three textareas: Title of post, gif url, and description
It will also need a save button to add the items in the form to the database
as well as a cancel button for resetting the form to its initial values.
*/

import { sendPosts } from "../data/provider.js";

const applicationElement = document.querySelector(".giffygram")

export const PostForm = () => {
    let html = ""
    html += `
        <div class="newPost">
        <div>
            <input type="text" name="title" class="newPost__input" placeholder="Title"></input>
        </div>
        <div>
            <input type="text" name="gifUrl" class="newPost__input" placeholder="Gif URL"></input>
        </div>
        <div>
            <textarea type="text" name="description" class="newPost__description" placeholder="Description" rows="3" cols="25"></textarea>
        </div>
        <div class="newPost__upload">
        <button id="savePost">Save</button>
        <button id="cancelPost">Cancel</button>
        </div>
        </div>
    `;

    return html;
}



applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "savePost") {
        const postTitle = document.querySelector("input[name='title']").value
        const gifUrl = document.querySelector("input[name='gifUrl']").value
        const postDescription = document.querySelector("textarea[name='description']").value
        const userId = localStorage.getItem("gg_user")

        const dataToSendToAPI = {
            userId: parseInt(userId),
            title: postTitle,
            link: gifUrl,
            story: postDescription,
            date: new Date().toLocaleString()
        }

        sendPosts(dataToSendToAPI)
            .then(() => {
            document.querySelector("input[name='title']").value = ""
            document.querySelector("input[name='gifUrl']").value = ""
            document.querySelector("textarea[name='description']").value = ""
        })
    } else if (clickEvent.target.id === "cancelPost") {
        location.reload()
        // document.querySelector("textarea[name='postTitle']").value = ""
        // document.querySelector("textarea[name='gifUrl']").value = ""
        // document.querySelector("textarea[name='postDescription']").value = ""
    }
})



// applicationElement.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id === "savePost") {
//     const title = document.querySelector("textarea[name='title']").value
//     const gifUrl = document.querySelector("textarea[name='gifUrl']").value
//     const description = document.querySelector("textarea[name='description']").value


//     const userPostSent = {
//         title: title,
//         gifUrl: gifUrl,
//         description: description
//     }
// }

//     sendPosts(userPostSent)
// })

// applicationElement.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id === "cancelPost") {
//     document.querySelector("textarea[name='title']").value = ""
//     document.querySelector("textarea[name='gifUrl']").value = ""
//     document.querySelector("textarea[name='description']").value = ""
//     }
// })