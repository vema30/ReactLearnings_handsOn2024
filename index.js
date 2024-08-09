const express = require("express");
const app=express();
const users = require("./routes/user");
const articles = require("./routes/article");
app.use("/users", users);
app.use("/articles", articles);

app.listen(3000,()=>{
    console.log("server is running ");
});