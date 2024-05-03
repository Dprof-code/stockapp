import express from 'express'
import mysql from 'mysql'
import cors from 'cors';
import fetch from 'node-fetch';

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
    // Fetching data from the REST API'
    fetch('https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&resultsCount=4&apiKey=9IrKSK00IMXNYApTpspYr42q3aE9wU8W')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const stocks = data.results;
            const sql = "INSERT INTO stock (symbol, volume, volume_weighted, open_price, close_price, high_price, low_price, timestamp, trades) VALUES ?";
            const values = stocks.map(stock => [stock.T, stock.v, stock.vw, stock.o, stock.c, stock.h, stock.l, stock.t, stock.n]); // Assuming 'symbol' and 'price' are the properties of each stock object
            db.query(sql, [values], (err, result) => {
                if (err) {
                    console.log(err);
                    return res.json({ message: "Error while inserting data into database" });
                } else {
                    return res.json({ message: "Data inserted successfully" });
                }
            });
        })
        .catch(error => {
            console.log(error);
            return res.json({ message: "Error fetching data from API" });
        });
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})