const express = require('express')
const bodyParser = require('body-parser')

const clueController = require('./controllers/clueController')
const managerController = require('./controllers/managerController')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine', 'hbs')

app.get('/', managerController.renderManagerPage)
app.post('/create', managerController.createAndRender)
app.get('/delete/:id', managerController.deleteAndRender)

app.get('/api/clue/:chunkId', clueController.getChunk)
app.post('/api/clue', clueController.newClue)
app.get('/api/clue/all', clueController.getAllClues)
app.delete('/api/clue/:id', clueController.deleteClue)

app.listen(3000, function () {
  console.log('Nightmare Server listening on port 3000!')
})
