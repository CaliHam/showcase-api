const express = require('express');
const cors = require('cors');
const app = express();

const animeCharacters = require('./data/animeCharacters')
const savedReports = require('./data/savedReports')

app.locals.title = "My Anime Ship API"
app.locals.characters = animeCharacters
app.locals.savedReports = savedReports

app.set('port', process.env.PORT || 3001);

app.use(cors());
app.use(express.json());

app.get('/api/v1/characters', (req, res) => {
  res.status(200).json(app.locals.characters);
});