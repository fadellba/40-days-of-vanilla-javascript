/*
# Expense Tracker Project

You have just finished the module 2. You have learned many important concepts till the session(day) 16. It is time to put everything together and do a project.

## Project Requirements

Create a simple expense tracker where user can add, remove, edit, and categorize expenses.

> Please Note: This will be a console-based project (no DOM), focusing only on JavaScript logic.

### Features to Implement

Create a `createExpenseTracker()` function that takes a username and an initial budget to expose the following functioanlities:

- Adding Expense
- Removing Expense
- Updating Expense
- Getting total expenses done by the user
- Getting expense by category
- Get the Highest Expense
- Get the Lowest Expense
- Get the user info
- Show all the expenses
- Update User data

Please make use of the factory function, closure to keep data private and return only the required features/methods.

## Sample User Data Structure

```js
 user: {
    name: "Tapas",
    budget: 5000,
  },
```

## Sample Expense Data Structure

```js
expenses: [
    { id: 1, amount: 200, category: "Food", description: "Lunch" },
    { id: 2, amount: 500, category: "Shopping", description: "New Shoes" },
],
```

## Discussion and Follow up

Once done, submit the GitHub link on [Discord](https://discord.com/invite/ux9BchWEW3). Please feel free to discuss about the tasks, if you need help. Also, help others to complete it.
*/

function ValidationError(message) {
  this.name = "ValidationError";
  this.message = message;
}

function ExpenseError(message) {
  this.name = "ExpenseError";
  this.message = message;
}

function createExpenseTracker({ name, budget }) {
  let id = 0;
  const expenses = [];

  return {
    addingExpense: (amount, category, description) => {
      try {
        if (isNaN(amount)) {
          throw new ValidationError("Amount cannot be a string");
        } else if (amount <= 0 || amount > budget) {
          throw new ValidationError("Amount must be in range of your budget");
        } else {
          const expense = {};
          expense.id = ++id;
          expense.amount = amount;
          expense.category = category;
          expense.description = description;
          expenses.push(expense);
        }
      } catch (error) {
        console.log(error.message);
      }
    },

    removingExpense: (expenseId) => {
      try {
        if (expenses.length === 0) {
          throw new ExpenseError("There is no expense to delete");
        }
        const index = expenses.findIndex((i) => i.id === expenseId);
        if (index != -1) {
          expenses.splice(index, 1);
        } else {
          throw new ExpenseError("Expense not found");
        }
      } catch (error) {
        console.log(error.message);
      }
    },

    updatingExpense: (expenseId, newAmount, newCategory, newDescription) => {
      try {
        if (expenses.length === 0) {
          throw new ExpenseError("There is no expense to delete");
        }
        const index = expenses.findIndex((i) => i.id === expenseId);
        if (index != -1) {
          try {
            if (isNaN(newAmount)) {
              throw new ValidationError("Amount cannot be a string");
            } else if (newAmount <= 0 || newAmount > budget) {
              throw new ValidationError(
                "Amount must be in range of your budget"
              );
            } else {
              expenses[index].amount = newAmount;
              expenses[index].category = newCategory;
              expenses[index].description = newDescription;
            }
          } catch (error) {
            console.log(error.message);
          }
        } else {
          throw new ExpenseError("Expense not found");
        }
      } catch (error) {
        console.log(error.message);
      }
    },

    gettingTotalExpenses: () => {
      try {
        if (expenses.length === 0) {
          throw new ExpenseError("There is no expense to delete");
        }
        console.log(expenses.reduce((total, e) => total + e.amount, 0));
      } catch (error) {
        console.log(error.message);
      }
    },

    gettingExpenseByCategory: () => {
      try {
        if (expenses.length === 0) {
          throw new ExpenseError("There is no expense to delete");
        }
        console.log(Object.groupBy(expenses, (e) => e.category));
      } catch (error) {
        console.log(error.message);
      }
    },

    getTheHighestExpense: () => {
      try {
        if (expenses.length === 0) {
          throw new ExpenseError("There is no expense to delete");
        }
        const amounts = expenses.map((e) => e.amount);
        console.log(Math.max(...amounts));
      } catch (error) {
        console.log(error.message);
      }
    },

    getTheLowestExpense: () => {
      try {
        if (expenses.length === 0) {
          throw new ExpenseError("There is no expense to delete");
        }
        const amounts = expenses.map((e) => e.amount);
        console.log(Math.min(...amounts));
      } catch (error) {
        console.log(error.message);
      }
    },

    getTheUserInfo: () => console.log(`Name: ${name}, Budget : ${budget}`),

    updateUserData: (newName, NewBudget) => {
      name = newName;
      budget = NewBudget;
    },

    showAllTheExpenses: () => {
      try {
        if (expenses.length === 0) {
          throw new ExpenseError("There is no expense to delete");
        }
        console.log(expenses);
      } catch (error) {
        console.log(error.message);
      }
    },
  };
}

const tracker = createExpenseTracker({name: "Tapas", budget: 5000});

console.log("--- 1. Adding Expenses ---");
tracker.addingExpense(100, "Food", "Restaurant");
tracker.addingExpense(50, "Transport", "Fuel");
tracker.addingExpense(200, "Food", "Groceries");
tracker.addingExpense(1500, "Travel", "Flight Ticket"); // Expected error: Budget exceeded
tracker.addingExpense("fifty", "Error", "Test");        // Expected error: Not a number

console.log("\n--- 2. Show all expenses ---");
tracker.showAllTheExpenses();

console.log("\n--- 3. Statistics ---");
console.log("Total Expenses:");
tracker.gettingTotalExpenses();

console.log("Expenses by Category:");
tracker.gettingExpenseByCategory();

console.log("Highest Expense:");
tracker.getTheHighestExpense();

console.log("Lowest Expense:");
tracker.getTheLowestExpense();

console.log("\n--- 4. Modification and Deletion ---");
console.log("Modifying expense #1 (100 -> 120):");
tracker.updatingExpense(1, 120, "Food", "Restaurant (with dessert)");

console.log("Deleting expense #2:");
tracker.removingExpense(2);

console.log("Final State:");
tracker.showAllTheExpenses();
