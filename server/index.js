const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment, getFortune, addGoal, getInspiration, changeImage, deleteImage } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/goal", addGoal)
app.get("/api/inspiration", getInspiration);
app.put("/api/inspiration/:id", changeImage);
app.delete("/api/inspiration", deleteImage);


app.listen(4000, () => console.log("Server running on 4000"));
