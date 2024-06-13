import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(cors());
// uses for to access the data sent from the client side
app.use(express.json());

app.post("/register", (req, res) => {
  console.log(req.body);
  res.json({success: "User Added successfully"});
})

app.post("/login", (req, res) => {
  console.log(req.body);
})


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});