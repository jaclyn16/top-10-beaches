require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const { Pool } = require("pg");
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is working!");
});

app.listen(3001, () => {
    console.log("Server running on post 3001");
});

app.get("/test-db", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()");
        res.json(result.rows);
    } catch (err) {
        console.log(err);
        res.send("Database error");
    }
});

app.post("/add-beach", async (req, res) => {
    try {
        const { name, location, image_url, description } = req.body;
        const result = await pool.query(
            "INSERT INTO beaches (name, location, image_url, description) VALUES ($1, $2, $3, $4) RETURNING *",
            [name, location, image_url, description]
        );
        res.json(result.rows);
    } catch (err) {
        console.log(err);
        res.send("Error adding beach");
    }
});

app.get("/get-beaches", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM beaches");
        res.json(result.rows);
    } catch (err) {
        console.log(err);
        res.send("Error getting beaches");
    }
});