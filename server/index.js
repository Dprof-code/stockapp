import express from 'express'
import mysql from 'mysql'
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "stockdb"
})

app.get('/', (req, res) => {
    const sql = "SELECT * FROM stock";
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return res.json({Message: "Error inside server"});
        } else {
            return res.json(result);
        }
    })
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})