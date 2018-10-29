const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const countryList = require('country-info-list');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));

app.post('/country', (req, res) => {
    const {text} = req.body;
    const country = countryList.getCountry(text);
    res.send(country.name);
})