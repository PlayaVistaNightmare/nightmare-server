const Clue = require('../models/clueModel')

const getChunk = (req, res) => {
    console.log('getChunk')
    Clue.find({}).then(clue => {
        res.json(clue)
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
    const { id } = req.params
    Clue.findOneAndRemove({id}).then(clue => res.json(clue))
}

module.exports = {getChunk, newClue, getAllClues, deleteClue}
