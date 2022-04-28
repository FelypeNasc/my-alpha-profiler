// config
import express from "express";
const app = express();
const port = 3001;
import "dotenv/config";

// middlewares

// routes
/* import auth from "./routes/auth";
import register from "./routes/register";
import edit from "./routes/edit";*/
import deleteU from "./routes/delete.js";
import view from "./routes/view.js";
const viewRoute = view;
const deleteUser = deleteU;

/* app.use("/auth", auth);
app.use("/register", register);
app.use("/edit", edit);*/
app.use("/delete", deleteUser);
app.use("/view", viewRoute);

app.listen(port, () => console.log(`Server started on port ${port}`));
