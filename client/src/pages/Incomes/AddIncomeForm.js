import "../Forms.scss";

export default function AddIncomeForm({
  formData,
  setFormData,
  handleSubmit,
  error,
}) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="source">Source of income</label>
        <input
          type="text"
          id="source"
          placeholder="Enter the source of income"
          value={formData.source}
          onChange={(e) =>
            setFormData((prev) => {
              return { ...prev, source: e.target.value };
            })
          }
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount*</label>
        <input
          type="number"
          id="amount"
          placeholder="Enter the amount"
          value={formData.amount}
          onChange={(e) =>
            setFormData((prev) => {
              return { ...prev, amount: e.target.value };
            })
          }
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date*</label>
        <input
          type="date"
          id="date"
          placeholder="Enter the date"
          value={formData.date}
          onChange={(e) =>
            setFormData((prev) => {
              return { ...prev, date: e.target.value };
            })
          }
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="comments">Comments</label>
        <textarea
          id="comments"
          placeholder="Add comments"
          rows="4"
          style={{ width: "100%" }}
          value={formData.comments}
          onChange={(e) =>
            setFormData((prev) => {
              return { ...prev, comments: e.target.value };
            })
          }
        />
      </div>
      <div className="error-text">{error}</div>
      <button onClick={handleSubmit} type="button">
        Add Income
      </button>
    </form>
  );
}
