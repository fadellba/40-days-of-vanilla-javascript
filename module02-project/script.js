function ValidationError(message) {
  this.name = "ValidationError";
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
          expense.id = id++;
          expense.amount = amount;
          expense.category = category;
          expense.description = description;
        }

      } catch (error) {
        console.log(error.message);
      }

    },
  };
}
