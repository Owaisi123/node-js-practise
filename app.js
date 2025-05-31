import express from "express";

const users = [
  { id: 1, name: "Owais", city: "Karachi", email: "abc@gmail.com" },
  { id: 2, name: "Ali", city: "Lahore", email: "ali@gmail.com" },
  { id: 3, name: "Sara", city: "Islamabad", email: "sara@gmail.com" },
  { id: 4, name: "Aisha", city: "Peshawar", email: "aisha@gmail.com" },
  { id: 5, name: "Ahmed", city: "Quetta", email: "ahmed@gmail.com" },
];

const app = express();
const PORT = 4000;

app.get("/", function (req, res) {
  res.send(`Hello<br>This is Home Page!`);
});

app.get("/about", function (req, res) {
  res.send("This is About page!");
});

app.get("/contact", function (req, res) {
  res.send("This is Contact Page");
});

app.get("/users", function (req, res) {
  res.json(users);
});

app.use((req, res) => {
  res
    .status(404)
    .send("404 Not Found - The page you are looking for does not exist.");
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
