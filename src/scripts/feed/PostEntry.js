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
        <div class="field">
            <label class="label" for="title">Title of post</label>
            <textarea type="text" name="title" class="input" rows="1" cols="60"></textarea>
        </div>
        <div class="field">
            <label class="label" for="gifUrl">GIF URL</label>
            <textarea type="text" name="gifUrl" class="input" rows="1" cols="60"></textarea>
        </div>
        <div class="field">
            <label class="label" for="description">Description</label>
            <textarea type="text" name="description" class="input" rows="6" cols="50"></textarea>
        </div>
        <button class="button" id="savePost">Save</button>
        <button class="button" id="cancelPost">Cancel</button>
    `;

    return html;
}

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "savePost") {
    const title = document.querySelector("textarea[name='title']").value
    const gifUrl = document.querySelector("textarea[name='gifUrl']").value
    const description = document.querySelector("textarea[name='description']").value

    const userPostSent = {
        title: title,
        gifUrl: gifUrl,
        description: description
    }


    sendPosts(userPostSent)
}
})

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "cancelPost") {
    document.querySelector("textarea[name='title']").value = ""
    document.querySelector("textarea[name='gifUrl']").value = ""
    document.querySelector("textarea[name='description']").value = ""
    }
})

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "savePost") {
        const postTitle = document.querySelector("textarea[name='postTitle']").value
        const gifUrl = document.querySelector("textarea[name='gifUrl']").value
        const postDescription = document.querySelector("textarea[name='postDescription']").value
        const userId = null // currentUser.id // Replace with actual user ID

        const dataToSendToAPI = {
            userId: userId,
            title: postTitle,
            link: gifUrl,
            story: postDescription,
            date_created: new Date().toLocaleString()
        }

        sendPosts(dataToSendToAPI)
            .then(() => {
            document.querySelector("textarea[name='postTitle']").value = ""
            document.querySelector("textarea[name='gifUrl']").value = ""
            document.querySelector("textarea[name='postDescription']").value = ""
        })
    } else if (clickEvent.target.id === "cancelPost") {
        location.reload()
        // document.querySelector("textarea[name='postTitle']").value = ""
        // document.querySelector("textarea[name='gifUrl']").value = ""
        // document.querySelector("textarea[name='postDescription']").value = ""
    }
})
