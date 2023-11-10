let currentBalance = 0
let expense = 0
let income = 0
let transactionHistory = []

const formatNumber = (number) => new Intl.NumberFormat('en-DE').format(number)


const submitForm = (e) => {
    e.preventDefault()
    var formElements = e.target
    const inputName = ["transaction", "amount"]
    const obj = {}
    for (let inpName of inputName) {
        obj[inpName] = formElements.elements[inpName].value
    }
    transactionHistory.push(obj)
    refreshTable()
    formElements.reset()
}

const refreshTable = () => {
    expense = 0
    income = 0
    currentBalance = 0
    deleteTableHistory()
    if (transactionHistory.length == 0) {
        return
    }
    for (let trans in transactionHistory) {
        addToCard(transactionHistory[trans], trans)
    }
}

const deleteTableHistory = () => {
    const history = document.getElementById("history-item")
    while (history.hasChildNodes()) {
        history.removeChild(history.firstChild)
    }
    const balance = document.getElementById("balance")
    balance.innerText = `Rp 0`
    const expenseElement = document.getElementById("expense")
    const incomeElement = document.getElementById("income")
    incomeElement.innerText = `Rp 0`
    expenseElement.innerText = `Rp 0`
}

const addToCard = (obj, id) => {
    if (parseInt(obj.amount) > 0) {
        addToIncome(obj)
    }
    else if (parseInt(obj.amount) < 0) {
        addToExpense(obj)
    }
    else {
        return
    }
    addToHistory(obj, id)
    addToBalance(obj)
}

const addToBalance = (obj) => {
    const balance = document.getElementById("balance")
    currentBalance += parseInt(obj.amount)
    balance.innerText = `Rp ${formatNumber(currentBalance)}`
}

const addToHistory = (obj, id) => {
    const history = document.getElementById("history-item")
    let newItem = document.createElement("li")
    newItem.className = "d-flex justify-content-between w-100"
    newItem.innerHTML = ` <p>${obj.transaction}</p>
    <div class="d-flex gap-2">
        <p>${obj.amount}</p>
        <button class="btn-delete" onclick="deleteRow(${id})"><i class="fa fa-trash text-danger"></i></button>
    </div>`
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

const deleteRow = (id) => {
    transactionHistory.splice(id, 1)
    refreshTable()
}

