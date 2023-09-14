import React, { useEffect, useState } from "react";
import "./TransactionTable.scss"; // Import the CSS for styling
import {
  formatDate,
  getExpenseListOfCurrentUser,
  getIncomeListOfCurrentUser,
} from "../../utils";
import SortIcon from "../../assets/icons/up-down.png";
import AscIcon from "../../assets/icons/up-arrow.png";
import DescIcon from "../../assets/icons/down-arrow.png";

const columns = [
  {
    value: "source",
    name: "Name",
    sortDirection: "none",
  },
  {
    value: "type",
    name: "Type",
    sortDirection: "none",
  },
  {
    value: "amount",
    name: "Amount",
    sortDirection: "none",
    compare: "number",
  },
  {
    value: "category",
    name: "Category",
    sortDirection: "none",
  },
  {
    value: "date",
    name: "Date",
    sortDirection: "none",
  },
  {
    value: "comments",
    name: "Comments",
    sortDirection: "none",
  },
];

export default function TransactionTable() {
  const [tableData, setTableData] = useState([]);
  const [sortColumn, setSortColumn] = useState(columns);

  const handleSort = (column) => {
    const col = sortColumn.find((el) => el.value === column);
    if (col.sortDirection === "asc") {
      if (col.compare === "number") {
        tableData.sort((a, b) => a[column] - b[column]);
      } else {
        tableData.sort((a, b) => b[column].localeCompare(a[column]));
      }
      setTableData(tableData);
      setSortColumn((prev) => {
        const index = prev.findIndex((el) => el.value === column);
        prev[index] = { ...prev[index], sortDirection: "desc" };
        return [...prev];
      });
    } else {
      if (col.compare === "number") {
        tableData.sort((a, b) => b[column] - a[column]);
      } else {
        tableData.sort((a, b) => {
          return a[column].localeCompare(b[column]);
        });
      }
      setTableData(tableData);
      setSortColumn((prev) => {
        const index = prev.findIndex((el) => el.value === column);
        prev[index] = { ...prev[index], sortDirection: "asc" };
        return [...prev];
      });
    }
  };

  useEffect(() => {
    const _incomeList = getIncomeListOfCurrentUser();
    const _expenseList = getExpenseListOfCurrentUser();
    const incomeList = _incomeList.map((el) => {
      return { type: "income", category: "-", ...el };
    });
    const expenseList = _expenseList.map((el) => {
      return { type: "expense", ...el };
    });
    const list = [...incomeList, ...expenseList];
    setTableData(list);
  }, []);

  return (
    <div>
      <h3>Recent Transactions</h3>
      <table className="expense-table">
        <thead>
          <tr>
            {sortColumn.map((column) => (
              <th key={column.value}>
                <div>
                  {column.name}
                  <img
                    onClick={() => handleSort(column.value)}
                    style={{ marginLeft: "5px" }}
                    src={
                      column.sortDirection === "asc"
                        ? AscIcon
                        : column.sortDirection === "desc"
                        ? DescIcon
                        : SortIcon
                    }
                    height={16}
                    width={16}
                    alt="sort"
                  />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        {tableData?.length > 0 ? (
          <tbody>
            {tableData.map((item) => (
              <tr key={item.id}>
                <td>{item.source}</td>
                <td>{item.type}</td>
                <td
                  style={
                    item.type === "income"
                      ? { color: "green" }
                      : { color: "red" }
                  }
                >
                  Rs. {item.amount}
                </td>
                <td>{item.category}</td>
                <td>{formatDate(item.date)}</td>
                <td>{item.comments}</td>
              </tr>
            ))}
          </tbody>
        ) : null}
      </table>
      {!tableData?.length > 0 && (
        <div className="no-table-data">
          You don't have any recent transaction
        </div>
      )}
    </div>
  );
}
