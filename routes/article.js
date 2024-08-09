// IMPORTS AND MIDDLEWARE / CONFIG
const express = require("express");
const router = express.Router();
router.use(express.json());

// OUR FAKE USERS
const articles = [{
    id: 1,
    title: "node is awesome",
    time_posted: new Date().toISOString()
},
{
    id: 2,
    title: "i love cats",
    time_posted: new Date().toISOString()
},
{
    id: 3,
    name: "learning to program",
    time_posted: new Date().toISOString()
}];

// OUR ROUTES
router.get("/", (req, res) => {
    res.json(articles);
});
router.get("/:id", (req, res) => {
    const results = articles.filter(article => article.id == req.params.id);
    res.json(results);
});
router.post("/", (req, res) => {
    const {id, name, age} = req.body;
    articles.push({id, name, age});
    res.json({success: true, message: "added successfully"});
});
router.put("/", (req, res) => {
    const { id, new_name } = req.body;
    articles[id-1].name = new_name;
    res.json({success: true, message: "updated"});
});
router.delete("/", (req, res) => {
    const { id } = req.body;
    articles.splice(id-1, id);
    res.json({success: true, message: "deleted"});
    
});

// EXPORTING OUR ROUTER
module.exports = router;