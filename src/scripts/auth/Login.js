import { getUsers, sendUser } from "../data/provider.js"


document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "loginButton") {
        let foundUser = null
        const userState = getUsers()

        const email = document.querySelector("input[name='email']").value
        const password = document.querySelector("input[name='password']").value

        for (const user of userState) {
            if (user.email === email && user.password === password) {
                foundUser = user
            }
        }

        if (foundUser !== null) {
            localStorage.setItem("gg_user", foundUser.id)
            document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
})

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "registerButton") {
        const RegisterForm = document.querySelector("#loginForm")
        RegisterForm.innerHTML = RegistrationForm()
    }
})



document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitButton") {
        let newUserEmail = document.querySelector("input[name='email']").value
        let newUserPassword = document.querySelector("input[name='password']").value
        let newUserName = document.querySelector("input[name='name']").value

        const sendUserToAPI = {
            name: newUserName,
            email: newUserEmail,
            password: newUserPassword
        }
        sendUser(sendUserToAPI)
        window.alert(`${newUserEmail} is now registered.`)
    }

})

export const LoginForm = () => {
    return `
        <div class="loginForm" id="loginForm">
            <form>
                <fieldset>
                    <label for="email">Email:</label>
                    <input type="text" name="email" autofocus placeholder="Email address" />
                </fieldset>
                <fieldset>
                    <label for="password">Password:</label>
                    <input type="password" name="password" placeholder="Password" />
                </fieldset>
            </form>
            <button id="loginButton">Login</button>
            <button id="registerButton">Register</button>
        </div>
    `
}

const RegistrationForm = () => {
    return `<div class="loginForm">
    <form>
        <fieldset>
            <label for="name">Name:</label>
            <input type="text" name="name" autofocus placeholder="First and Last Name" />
        </fieldset>
        <fieldset>
            <label for="email">Email:</label>
            <input type="text" name="email" autofocus placeholder="Email address" />
        </fieldset>
        <fieldset>
            <label for="password">Password:</label>
            <input type="password" name="password" placeholder="Password" />
        </fieldset>
    </form>
    <button id="submitButton">Submit</button>
</div>`
}
