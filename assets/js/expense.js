let currentBalance = 0
let expense = 0
let income = 0

const formatNumber = (number) => new Intl.NumberFormat('en-DE').format(number)


const submitForm = (e) => {
    e.preventDefault()
    var formElements = e.target
    const inputName = ["transaction", "amount"]
    const obj = {}
    for (let inpName of inputName) {
        obj[inpName] = formElements.elements[inpName].value
    }
    addToCard(obj)
    formElements.reset()
}

const addToCard = (obj) => {
    if (parseInt(obj.amount) > 0) {
        addToIncome(obj)
    }
    else if (parseInt(obj.amount) < 0) {
        addToExpense(obj)
    }
    else {
        return
    }
    addToHistory(obj)
    addToBalance(obj)
}

const addToBalance = (obj) => {
    const balance = document.getElementById("balance")
    currentBalance += parseInt(obj.amount)
    balance.innerText = `Rp ${formatNumber(currentBalance)}`
}

const addToHistory = (obj) => {
    const history = document.getElementById("history-item")
    let newItem = document.createElement("li")
    newItem.className = "d-flex justify-content-between w-100"
    newItem.innerHTML = `<p>${obj.transaction}</p>
    <p>${formatNumber(obj.amount)}</p>`
    history.append(newItem)
}

const addToExpense = (obj) => {
    const expenseElement = document.getElementById("expense")
    expense += parseInt(obj.amount)
    expenseElement.innerText = `Rp ${formatNumber(expense)}`
}

const addToIncome = (obj) => {
    const incomeElement = document.getElementById("income")
    income += parseInt(obj.amount)
    incomeElement.innerText = `Rp ${formatNumber(income)}`
}

