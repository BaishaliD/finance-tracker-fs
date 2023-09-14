import "./Expenses.scss";
import DeleteIcon from "../../assets/icons/delete.png";
import MoneyIcon from "../../assets/icons/dollar-symbol.png";
import CommentIcon from "../../assets/icons/chat-bubble.png";
import CalendarIcon from "../../assets/icons/calendar.png";
import { formatDate } from "../../utils.js";
import { categoryData } from "../../database";

export default function ExpenseCard({ data, handleDelete }) {
  const { id, source, amount, category, date, comments } = data;
  return (
    <div
      className="expense-card"
      style={{
        borderColor: categoryData.find((el) => el.category === data.category)
          ?.color,
      }}
    >
      <img
        src={DeleteIcon}
        alt="Delete"
        height={20}
        width={20}
        onClick={() => handleDelete(id)}
      />
      <div className="title">{source}</div>
      <div className="details">
        <div style={{ width: "25%" }}>
          <img src={MoneyIcon} height={15} width={15} alt="money" />
          <span>Rs. {amount}</span>
        </div>
        <div style={{ width: "25%" }}>
          <img src={CalendarIcon} height={15} width={15} alt="date" />
          <span>{formatDate(date)}</span>
        </div>
      </div>
      <div className="comment">
        <img src={CommentIcon} height={15} width={15} alt="comment" />
        <div>{comments}</div>
      </div>
    </div>
  );
}
