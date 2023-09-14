export const getIncomeListOfCurrentUser = () => {
  const currentUserEmail = JSON.parse(localStorage.getItem("user_info"))?.result
    ?.email;
  const localIncomeList = localStorage.getItem("income_list")
    ? JSON.parse(localStorage.getItem("income_list"))
    : [];
  const incomeListForCurrentUser = localIncomeList.filter(
    (el) => el.userEmail === currentUserEmail
  );
  return incomeListForCurrentUser;
};

export const getExpenseListOfCurrentUser = () => {
  const currentUserEmail = JSON.parse(localStorage.getItem("user_info"))?.result
    ?.email;
  const localExpenseList = localStorage.getItem("expense_list")
    ? JSON.parse(localStorage.getItem("expense_list"))
    : [];
  const expenseListForCurrentUser = localExpenseList.filter(
    (el) => el.userEmail === currentUserEmail
  );
  return expenseListForCurrentUser;
};

export const formatDate = function (inputDate) {
  try {
    // Parse the input date string in "yyyy-mm-dd" format
    const dateParts = inputDate.split("-");
    if (dateParts.length !== 3) {
      // Invalid input format
      return "Invalid Date";
    }

    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];

    // Construct the formatted date string in "dd/mm/yyyy" format
    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
  } catch (err) {
    return "00/00/0000";
  }
};
