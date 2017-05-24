const Clue = require('../models/clueModel')

const getChunk = (req, res) => {
  console.log('getChunk')
  Clue.find({}).sort({created_at: 1}).then(clues => {
    const CHUNKLENGTH = 2;
    if(req.params.chunkId < clues.length - CHUNKLENGTH){
      let output = clues.slice(+req.params.chunkId, +req.params.chunkId+CHUNKLENGTH);
      res.json(output)
    } else {
      res.json('Bad Chunk ID')
    }
  })
}

const newClue = (req, res) => {
  console.log('newClue')
  Clue.create(req.body).then(clue => res.json(clue))
}

const getAllClues = (req, res) => {
  console.log('getAllClues')
  Clue.find({}).then(clue => res.json(clue))
}

const deleteClue = (req, res) => {
  console.log('deleteClue')
  console.log(req.params.id)
  Clue.findOneAndRemove({_id: req.params.id}).then(clue => res.json(clue))
}

module.exports = {getChunk, newClue, getAllClues, deleteClue}
