import React, { useState, useEffect } from "react";
import {
  getIncomeListOfCurrentUser,
  getExpenseListOfCurrentUser,
} from "../../utils";
import "./Insights.scss";
import DoughnutChart from "./Doughnut";
import BarChart from "./BarChart";
import TransactionTable from "./TransactionTable";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

export default function Insights() {
  const [incomeCategoryLabels, setIncomeCategoryLabels] = useState([]);
  const [incomeCategoryData, setIncomeCategoryData] = useState([]);

  const [expenseCategoryLabels, setExpenseCategoryLabels] = useState([]);
  const [expenseCategoryData, setExpenseCategoryData] = useState([]);

  const [incomeLabels, setIncomeLabels] = useState([]);
  const [incomeData, setIncomeData] = useState([]);

  const [expenseLabels, setExpenseLabels] = useState([]);
  const [expenseData, setExpenseData] = useState([]);

  useEffect(() => {
    const incomeList = getIncomeListOfCurrentUser();
    const expenseList = getExpenseListOfCurrentUser();
    incomeCategory(incomeList);
    expenseCategory(expenseList);
    dailyIncome(incomeList);
    dailyExpense(expenseList);
  }, []);

  const incomeCategory = (incomeList) => {
    const categoryMap = {};
    incomeList.forEach((expense) => {
      categoryMap[expense.source] = categoryMap[expense.source]
        ? categoryMap[expense.source] + parseInt(expense.amount)
        : parseInt(expense.amount);
    });

    const labels = Object.keys(categoryMap);
    const data = Object.values(categoryMap);

    setIncomeCategoryLabels(labels);
    setIncomeCategoryData(data);
  };

  const expenseCategory = (expenseList) => {
    const categoryMap = {};
    expenseList.forEach((expense) => {
      categoryMap[expense.category] = categoryMap[expense.category]
        ? categoryMap[expense.category] + parseInt(expense.amount)
        : parseInt(expense.amount);
    });

    const labels = Object.keys(categoryMap);
    const data = Object.values(categoryMap);

    setExpenseCategoryLabels(labels);
    setExpenseCategoryData(data);
  };

  const dailyIncome = (incomeList) => {
    const dateMap = {};
    incomeList.forEach((income) => {
      dateMap[income.date] = dateMap[income.date]
        ? dateMap[income.date] + parseInt(income.amount)
        : parseInt(income.amount);
    });

    const dateArray = Object.keys(dateMap).sort(
      (a, b) => new Date(a) - new Date(b)
    );
    const incomeArray = dateArray.map((date) => dateMap[date]);

    setIncomeLabels(dateArray);
    setIncomeData(incomeArray);
  };

  const dailyExpense = (expenseList) => {
    const dateMap = {};
    expenseList.forEach((expense) => {
      dateMap[expense.date] = dateMap[expense.date]
        ? dateMap[expense.date] + parseInt(expense.amount)
        : parseInt(expense.amount);
    });

    const dateArray = Object.keys(dateMap).sort(
      (a, b) => new Date(a) - new Date(b)
    );
    const expenseArray = dateArray.map((date) => dateMap[date]);

    setExpenseLabels(dateArray);
    setExpenseData(expenseArray);
  };

  return (
    <div>
      <TransactionTable />

      <div className="chart-container">
        <div className="large">
          <h3>Daily Expense</h3>
          <BarChart
            chartdata={expenseData}
            labels={expenseLabels}
            datalabel={"Expense"}
          />
        </div>
        <div className="small">
          <h3>Expense by Category</h3>
          <DoughnutChart
            chartdata={expenseCategoryData}
            labels={expenseCategoryLabels}
          />
        </div>
      </div>

      <div className="chart-container">
        <div className="small">
          <h3>Income by Source</h3>
          <DoughnutChart
            chartdata={incomeCategoryData}
            labels={incomeCategoryLabels}
          />
        </div>
        <div className="large">
          <h3>Daily Income</h3>
          <BarChart
            chartdata={incomeData}
            labels={incomeLabels}
            datalabel={"Income"}
          />
        </div>
      </div>
    </div>
  );
}
