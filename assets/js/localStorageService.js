export const setLocalStorage = (key, val) => {
    localStorage.setItem(key, val);
}

export const getLocalStorage = (key) => localStorage.getItem(key)