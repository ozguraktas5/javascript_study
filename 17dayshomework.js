localStorage.setItem("firstName", "Ozgur");
localStorage.setItem("lastName", "Aktas");
localStorage.setItem("country", "Turkey");
localStorage.setItem("city", "Samsun");

console.log(localStorage)

const student = {
    firstName: "Alev",
    lastName: "Yılmaz",
    age: 33,
    skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
    country: "Turkey",
    registeredKeys: ["firstName", "lastName", "age", "skills", "country", "registeredKeys"]
}

let studentJSON = JSON.stringify(student)
localStorage.setItem('student',studentJSON)
console.log(localStorage)

const personAccount = {
    firstName: "Emre",
    lastName: "Deniz",
    incomes: [],
    expenses: [],

    totalIncomes() {
        let sum = 0;
        for (let incomes of this.incomes) {
            sum += incomes.amount
        }
        return sum
    },
    totalExpenses() {
        let sum2 = 0;
        for (let expenses of this.expenses) {
            sum2 += expenses.amount
        }
        return sum2
    },
    accountInfo() {
        console.log("First Name: " + this.firstName)
        console.log("Last Name: " + this.lastName)
        console.log("Total Income: " + this.totalIncomes())
        console.log("Total Expense: " + this.totalExpenses())
        console.log("Account Balance: " + this.accountBalance())
    },
    addIncome(amount, comment) {
        this.incomes.push({
            amount: amount,
            comment: comment
        })
    },
    addExpense(amount, comment) {
        this.expenses.push({
            amount: amount,
            comment: comment
        })
    },
    accountBalance() {
        return this.totalIncomes() - this.totalExpenses()
    }
}

personAccount.addIncome(1000, "Skirt");
personAccount.addIncome(2000, "Shoes");

personAccount.addExpense(500, "Clothes");
personAccount.addExpense(300, "Shoes");

personAccount.accountInfo()