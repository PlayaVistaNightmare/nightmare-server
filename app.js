const express = require('express')
const bodyParser = require('body-parser')

const clueController = require('./controllers/clueController')

const app = express()

app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/api/clue/:chunkId', clueController.getChunk)
app.post('/api/clue', clueController.newClue)
app.get('/api/clue/all', clueController.getAllClues)
app.delete('/api/clue/:id', clueController.deleteClue)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
