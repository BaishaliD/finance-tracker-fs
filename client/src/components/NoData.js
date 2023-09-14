import NoDataImage from "../assets/images/no-data.svg";

export default function NoData({ message = "Nothing to show here!" }) {
  return (
    <div className="no-data">
      <img src={NoDataImage} alt={message} width={"100%"} height={"100%"} />
      <h4>{message}</h4>
    </div>
  );
}
