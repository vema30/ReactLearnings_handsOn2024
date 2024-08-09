// IMPORTS AND MIDDLEWARE / CONFIG
const express = require("express");
const router = express.Router();
router.use(express.json());

// OUR FAKE USERS
const users = [{
    id: 1,
    name: "jack",
    age: 23
},
{
    id: 2,
    name: "steve",
    age: 26
},
{
    id: 3,
    name: "robert",
    age: 24
}];

// OUR ROUTES
router.get("/", (req, res) => {
    res.json(users);
});
router.get("/:id", (req, res) => {
    const results = users.filter(user => user.id == req.params.id);
    res.json(results);
});
router.post("/", (req, res) => {
    const {id, name, age} = req.body;
    users.push({id, name, age});
    res.json({success: true, message: "added successfully"});
});
router.put("/", (req, res) => {
    const { id, new_name } = req.body;
    users[id-1].name = new_name;
    res.json({success: true, message: "updated"});
});
router.delete("/", (req, res) => {
    const { id } = req.body;
    users.splice(id-1, id);
    res.json({success: true, message: "deleted"});
    
});

// EXPORTING OUR ROUTER
module.exports = router;