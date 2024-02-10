function disFonksiyon() {
  let number = 2;
  function icFonksiyon() {
    number * 2;
    return number;
  }

  return icFonksiyon;
}

let fonksiyon = disFonksiyon();
console.log(fonksiyon());
console.log(fonksiyon());
console.log(fonksiyon());

function outerFunction3() {
  let array = [];
  function addArray() {
    array.push("Ali");
    return array;
  }
  function removeArray() {
    array.pop();
    return array;
  }
  function clearArray() {
    array = [];
    return array;
  }
  return {
    addArray: addArray,
    removeArray: removeArray,
    clearArray: clearArray,
  };
}

const innerFuncs2 = outerFunction3();

console.log(innerFuncs2.addArray());
console.log(innerFuncs2.removeArray());
console.log(innerFuncs2.clearArray());

function personAccount(firstName, lastName, incomes, expenses) {
  let sum = 0;
  function totalIncome() {
    return incomes.reduce((sum, income) => sum + income, 0);
  }
  function totalExpense() {
    return expenses.reduce((sum, expense) => sum + expense, 0);
  }
  function addIncome(incomeName, incomeAmount) {
    
    if (typeof incomeName === "string" && typeof incomeAmount === "number") {
      incomes.push(incomeAmount);
      sum += incomeAmount;
    } else {
      console.log("Error! Incorrect input data");
    }
  }

  function addExpense(expenseName, expenseAmount) {
    
    if (typeof expenseName === "string" && typeof expenseAmount === "number") {
      expenses.push(expenseAmount);
      sum -= expenseAmount;
    } else {
      console.log("Error! Incorrect input data");
    }
  }

  function accountBalance() {
    return sum;
  }
  function accountInfo() {
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("Total Income: " + totalIncome());
    console.log("Total Expense: " + totalExpense());
  }

  return {
    accountInfo: accountInfo,
    addIncome: addIncome,
    addExpense: addExpense,
    accountBalance: accountBalance,
  };
}

const myAccount = personAccount("Ozgur", "Aktas", [1000, 2000], [500, 300])

myAccount.accountInfo()
