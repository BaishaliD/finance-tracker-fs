import { useEffect } from "react";
import "./Layout.scss";
import Sidemenu from "./Sidemenu";
import { useLocation, useNavigate } from "react-router-dom";

export default function Layout({ heading, children }) {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!localStorage.getItem("user_info")) {
      navigate("/loggedout");
    }
  }, [location.pathname]);
  return (
    <div className="layout">
      <Sidemenu />
      <div className="body-container">
        <div className="heading">
          <span>{heading}</span>
        </div>
        {children}
      </div>
    </div>
  );
}
