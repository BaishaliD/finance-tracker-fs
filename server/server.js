import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import React from "react";
import { renderToString } from "react-dom/server";
import path from "path";
// import Dashboard from "./view/Dashboard.js";

const userRoutes = require("./routes/userRoutes");

const app = express();

// app.use(cors());

app.use(
  cors({
    origin: ["https://finance-tracker-frontend.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/users", userRoutes);

// Serve static files from the 'build' directory for client-side rendering
// app.use(
//   express.static(path.join(__dirname, "../client/build"), { index: false })
// );

app.get("/healthcheck", function (req, res) {
  res.send("Ok done!");
});

// Server-side rendering for the dashboard route using EJS template
app.get("/dashboard/:slug1/:slug2/:slug3", (req, res) => {
  console.log("SLUGS ", req.params.slug1, req.params.slug2, req.params.slug3);
  const dashboardHtml = renderToString(
    <div id="root">
      Hello
      {/* <Dashboard
        income={req.params.slug1}
        expense={req.params.slug2}
        balance={req.params.slug3}
      /> */}
    </div>
  );
  return res.send(`
    <html>
      <body>
        <div id="root">
        ${dashboardHtml}
        </div>
      </body>
    </html>
  `);
});

// Client-side rendering for other routes
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build", "index.html"));
// });

const PORT = process.env.port || 5000;
const mongoDB = `mongodb+srv://baishali95920:MHZH47CjTfmPsCGX@cluster1.fwclc62.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(mongoDB, { useNewUrlParser: true })
  .then(() =>
    app.listen(PORT, () => console.log("Server is running at port ", PORT))
  )
  .catch((err) => console.log("Error in running server ", err));
