const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

let allData = JSON.parse(fs.readFileSync('sugar_prices.json', 'utf8'));

app.use(express.static(path.join(__dirname + "/public")))

app.get('/latest-sugar-prices', (req, res) => {
    res.send(allData);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
