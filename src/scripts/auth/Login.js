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
        const RegisterForm = document.querySelector("#registerForm")
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
    <article id="registerForm">
    <article class="login__flex" id="login-container">
        <img class="iPhone" src=images/iphone-mock.png>
        <section class="login-container" >
            <img class="logo" src="images/GiffyGram.png">
            <div class="loginForm" id="loginForm">
                <div class="login__input">
                    <input class="input" type="text" name="email" autofocus placeholder="Email address" />
                </div>
                <div class="login__input">
                    <input class="input" type="password" name="password" placeholder="Password" />
                </div>
                <div class="buttons">
                    <button id="loginButton"><b>Log in</b></button>
                </div>
            </div>
            <div class="line">
                <hr class="hrLine hrOne">
                <p class="hrLine or"><b>OR</b></p>
                <hr class="hrLine hrTwo">
            </div>
            <div class="bottom_login">
                <p class="account">Don't have an account? <b id="registerButton">Sign up</b></p>
            </div>
        </section>
    </article>
        <footer>
            <div class="login__footer">
                <p class="footOne"> About </p>
                <p class="foot"> Blog </p>
                <p class="foot"> Jobs </p>
                <p class="foot"> Help </p>
                <p class="foot"> API </p>
                <p class="foot"> Privacy </p>
                <p class="foot"> Terms </p>
                <p class="foot"> Top Accounts </p>
                <p class="foot"> Locations </p>
            </div>
            <div>
                <p class="final__data">© 2023 Giffygram from Team-GiforJif</p>
            </div>
        </footer>
    </article>
    `
}

const RegistrationForm = () => {
    return `
    <article id="registerForm">
    <article class="login__flex" id="register-container">
        <section class="login-container">
            <img class="logo" id="gg__logo" src="images/GiffyGram.png">
            <div class="loginForm" id="loginForm">
                <div class="login__input">
                    <input class="input" type="text" name="name" autofocus placeholder="First and last name" />
                </div>
                <div class="login__input">
                    <input class="input" type="text" name="email" autofocus placeholder="Email address" />
                </div>
                <div class="login__input">
                    <input class="input" type="password" name="password" placeholder="Password" />
                </div>
                <button id="submitButton"><b>Submit</b></button>
            </div>
        </section>
    </article>
        <footer>
            <div class="login__footer">
                <p class="footOne"> About </p>
                <p class="foot"> Blog </p>
                <p class="foot"> Jobs </p>
                <p class="foot"> Help </p>
                <p class="foot"> API </p>
                <p class="foot"> Privacy </p>
                <p class="foot"> Terms </p>
                <p class="foot"> Top Accounts </p>
                <p class="foot"> Locations </p>
            </div>
            <div>
                <p class="final__data">© 2023 Giffygram from Team-GiforJif</p>
            </div>
        </footer>
        </article>`

}
