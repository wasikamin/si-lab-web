import { setLocalStorage } from './localStorageService.js';

export const login = (e) => {
    e.preventDefault()
    var formElements = e.target
    const inputName = ["email", "password"]
    const obj = {}
    for (let inpName of inputName) {
        obj[inpName] = formElements.elements[inpName].value
    }
    setLocalStorage("user", JSON.stringify(obj))
    window.location.replace("index.html")
}