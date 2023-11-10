import { getLocalStorage } from "./localStorageService.js"

const checkUser = () => {
    const user = getLocalStorage("user")
    let nav = document.getElementById("navbar-links")
    console.log(nav)
    if (user) {
        const tracker = document.createElement("li")
        tracker.className = "nav-item"
        tracker.innerHTML = `<a class="nav-link" href="tracker.html">TRACKER</a>`
        nav.appendChild(tracker)
    } else {
        const login = document.createElement("li")
        login.className = "nav-item"
        login.innerHTML = `<a class="nav-link" href="login.html">LOGIN</a>`
        nav.appendChild(login)
    }
}

checkUser()