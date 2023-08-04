const express = require('express');
const cors = require('cors');
const app = express();

const animeCharacters = require('./data/animeCharacters')
const savedReports = require('./data/savedReports')
const {getSynastry, getZodiacSign} = require('./synastry')

app.locals.title = "My Anime Ship API"
app.locals.characters = animeCharacters
app.locals.savedReports = savedReports

app.set('port', process.env.PORT || 3001);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send(`Welcome to ${app.locals.title}!`)
})

app.get('/api/v1/characters', (req, res) => {
    res.status(200).json(app.locals.characters);
});

app.get('/api/v1/savedreports', (req, res) => {
    res.status(200).json(app.locals.savedReports);
});

app.get('/api/v1/characters/:id', (req, res) => {
    let id = req.params.id
    let foundCharacter = app.locals.characters.find(character => character.id === parseInt(id))
    
    if (foundCharacter) {
        res.status(200).json(foundCharacter)
    } else {
        res.sendStatus(404)
    }
})

app.post('/api/v1/savedreports', (req, res) => {
    app.locals.savedReports.push(req.body);

    res.status(201).json(app.locals.savedReports);
});

app.post('/api/v1/synastry', (req, res) => {
    const {month1, day1, month2, day2} = req.body
    const report = getSynastry(month1, day1, month2, day2)

    if (report) {
        res.status(200).json(report)
    } else {
        res.sendStatus(404)
    }
});

app.post('/api/v1/zodiac', (req, res) => {
    const {month, day} = req.body
    const sign = getZodiacSign(month, day)

    if (sign) {
        res.status(200).json(sign)
    } else {
        res.sendStatus(404)
    }
});


app.delete('/api/v1/savedreports/:id', (req, res) => {
    let id = req.params.id
    app.locals.savedReports = app.locals.savedReports.filter(task => task.id !== parseInt(id))
    
    res.status(201).json(app.locals.savedReports)
});

app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});