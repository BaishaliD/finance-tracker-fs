import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIncome, deleteIncome } from "../../redux/actions/incomes";
import AddIncomeForm from "./AddIncomeForm";
import NoData from "../../components/NoData";
import Incomecard from "./IncomeCard";

const INIT_FORM_DATA = {
  source: "",
  amount: "",
  date: "",
  comments: "",
};

export default function Income() {
  const incomeList = useSelector(({ income }) => income.incomeList);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(INIT_FORM_DATA);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError("");
    const { amount, source, date, comments } = formData;
    if (!amount || !source || !date) {
      setError("Please fill all the mandatory fields");
    } else {
      setError("");
      const data = {
        id: new Date().getTime(),
        amount,
        source,
        date,
        comments,
      };
      dispatch(addIncome(data));
      setFormData(INIT_FORM_DATA);
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteIncome(id));
  };

  return (
    <div>
      {/* <div>
        Total Income : <span>Rs. 1,40,000</span>
      </div> */}
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ width: "40%", padding: "0 3rem" }}>
          <AddIncomeForm
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            error={error}
          />
        </div>
        <div style={{ width: "60%", padding: "0 3rem" }}>
          {incomeList?.length > 0 ? (
            incomeList.map((item) => (
              <Incomecard
                key={item.id}
                data={item}
                handleDelete={handleDelete}
              />
            ))
          ) : (
            <div style={{ width: 200, margin: "auto" }}>
              <NoData message="You have not added any income yet!" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
