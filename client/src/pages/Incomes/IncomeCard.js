import "./Incomes.scss";
import DeleteIcon from "../../assets/icons/delete.png";
import MoneyIcon from "../../assets/icons/dollar-symbol.png";
import CommentIcon from "../../assets/icons/chat-bubble.png";
import CalendarIcon from "../../assets/icons/calendar.png";
import { formatDate } from "../../utils.js";

export default function Incomecard({ data, handleDelete }) {
  const { id, source, amount, date, comments } = data;
  return (
    <div className="income-card">
      <img
        src={DeleteIcon}
        alt="Delete"
        height={20}
        width={20}
        onClick={() => handleDelete(id)}
      />
      <div className="title" data-testid="income-source">
        {source}
      </div>
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
