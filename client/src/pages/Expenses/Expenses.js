import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpense, deleteExpense } from "../../redux/actions/expenses";
import AddExpenseForm from "./AddExpenseForm";
import NoData from "../../components/NoData";
import ExpenseCard from "./ExpenseCard";

const INIT_FORM_DATA = {
  source: "",
  amount: "",
  category: "",
  date: "",
  comments: "",
};

export default function Expenses() {
  const expenseList = useSelector(({ expense }) => expense.expenseList);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(INIT_FORM_DATA);
  const [category, setCategory] = useState();
  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError("");
    const { amount, source, date, comments, category } = formData;
    if (!amount || !source || !date || !category) {
      setError("Please fill all the mandatory fields");
    } else {
      setError("");
      const data = {
        id: new Date().getTime(),
        amount,
        category,
        source,
        date,
        comments,
      };
      dispatch(addExpense(data));
      setFormData(INIT_FORM_DATA);
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteExpense(id));
  };

  return (
    <div>
      {/* <div>
        Total Expense : <span>Rs. 1,40,000</span>
      </div> */}
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ width: "40%", padding: "0 3rem" }}>
          <AddExpenseForm
            formData={formData}
            category={category}
            setCategory={setCategory}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            error={error}
          />
        </div>
        <div style={{ width: "60%", padding: "0 3rem" }}>
          {expenseList?.length > 0 ? (
            expenseList.map((item) => (
              <ExpenseCard
                key={item.id}
                data={item}
                handleDelete={handleDelete}
              />
            ))
          ) : (
            <div style={{ width: 200, margin: "auto" }}>
              <NoData message="You have not added any expense yet!" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
