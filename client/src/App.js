import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/Register/Register";
import Layout from "./layout/Layout";
import Income from "./pages/Incomes/Incomes";
import Expenses from "./pages/Expenses/Expenses";
import Insights from "./pages/Insights/Insights";
import Loggedout from "./pages/Loggedout/Loggedout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route
            path="/insights"
            element={
              <Layout heading="Insights">
                <Insights />
              </Layout>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Layout heading="Dashboard">
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/incomes"
            element={
              <Layout heading="Incomes">
                <Income />
              </Layout>
            }
          />
          <Route
            path="/expenses"
            element={
              <Layout heading="Expenses">
                <Expenses />
              </Layout>
            }
          />
          <Route path="/loggedout" element={<Loggedout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
