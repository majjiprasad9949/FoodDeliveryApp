const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || "foodie_dev_secret_change_this";

// In-memory "database" for now (swap for real DB later)
const users = [];

// ---------- AUTH ROUTES ----------

// Register
app.post("/api/auth/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      return res.status(409).json({ message: "An account with this email already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      id: users.length + 1,
      name,
      email,
      password: hashedPassword
    };

    users.push(newUser);

    const token = jwt.sign({ id: newUser.id, email: newUser.email }, JWT_SECRET, {
      expiresIn: "7d"
    });

    res.status(201).json({
      message: "Account created successfully.",
      token,
      user: { id: newUser.id, name: newUser.name, email: newUser.email }
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong. Please try again." });
  }
});

// Login
app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    const user = users.find((u) => u.email === email);
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "7d"
    });

    res.json({
      message: "Logged in successfully.",
      token,
      user: { id: user.id, name: user.name, email: user.email }
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong. Please try again." });
  }
});

// ---------- RESTAURANTS ROUTE (example) ----------

const restaurants = [
  { id: 1, name: "Pizza Palace", cuisine: "Italian, Pizza", rating: 4.6, time: 25, price: "₹350" },
  { id: 2, name: "Burger House", cuisine: "American, Burgers", rating: 4.4, time: 20, price: "₹150" },
  { id: 3, name: "Biryani Point", cuisine: "Indian, Biryani", rating: 4.7, time: 30, price: "₹410" }
];

app.get("/api/restaurants", (req, res) => {
  res.json(restaurants);
});

app.get("/", (req, res) => {
  res.send("Foodie API is running.");
});


app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
