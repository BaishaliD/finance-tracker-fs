import { useState, useEffect } from "react";
import "./Layout.scss";
import InsightsIcon from "../assets/icons/data-analytics.png";
import IncomeIcon from "../assets/icons/income.png";
import ExpenseIcon from "../assets/icons/expense.png";
import DashboardIcon from "../assets/icons/dashboard.png";
import InsightsIconSelecetd from "../assets/icons/data-analytics-white.png";
import IncomeIconSelected from "../assets/icons/income-white.png";
import ExpenseIconSelected from "../assets/icons/expense-white.png";
import DashboardIconSelected from "../assets/icons/data-analytics-white.png";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  getIncomeListOfCurrentUser,
  getExpenseListOfCurrentUser,
} from "../utils";
import MenuItem from "./MenuItem";

const menu = [
  {
    id: 0,
    label: "Insights",
    icon: InsightsIcon,
    selectedIcon: InsightsIconSelecetd,
    route: "/insights",
    height: 20,
    width: 20,
  },

  {
    id: 2,
    label: "Incomes",
    icon: IncomeIcon,
    selectedIcon: IncomeIconSelected,
    route: "/incomes",
    height: 30,
    width: 30,
    selected: true,
  },
  {
    id: 3,
    label: "Expenses",
    icon: ExpenseIcon,
    selectedIcon: ExpenseIconSelected,
    route: "/expenses",
    height: 30,
    width: 30,
  },
  {
    id: 1,
    label: "Dashboard",
    icon: DashboardIcon,
    selectedIcon: DashboardIconSelected,
    route: "/dashboard",
    height: 20,
    width: 20,
  },
];

export default function Sidemenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedRoute, setSelectedRoute] = useState("/insights");
  const [name, setName] = useState("");

  useEffect(() => {
    setSelectedRoute(location?.pathname);
  }, [location?.pathname]);

  useEffect(() => {
    const username = localStorage.getItem("user_info")
      ? JSON.parse(localStorage.getItem("user_info")).result?.name
      : "";
    setName(username);
  }, []);

  const getData = () => {
    const incomeList = getIncomeListOfCurrentUser();
    const expenseList = getExpenseListOfCurrentUser();
    const totalIncome = incomeList.reduce(
      (acc, income) => acc + parseInt(income.amount),
      0
    );

    const totalExpense = expenseList.reduce(
      (acc, expense) => acc + parseInt(expense.amount),
      0
    );

    const balance = totalIncome - totalExpense;

    return `/${totalIncome}/${totalExpense}/${balance}`;
  };
  return (
    <div className="sidemenu-container">
      <h2>Finance Tracker</h2>
      <br />
      <br />
      <div>
        {menu.map((item) => (
          <div key={item.route}>
            {item.route === "/dashboard" ? (
              <a href={item.route + getData()}>
                <MenuItem item={item} selectedRoute={selectedRoute} />
              </a>
            ) : (
              <Link to={item.route}>
                <MenuItem item={item} selectedRoute={selectedRoute} />
              </Link>
            )}
          </div>
        ))}
        <div className="footer">
          <h1>Hi, {name}</h1>
          <button
            onClick={() => {
              localStorage.removeItem("user_info");
              navigate("/");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
