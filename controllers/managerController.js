const Clue = require('../models/clueModel')

const renderManagerPage = (req, res) => {
  Clue.find({})
  .sort({created_at: 1})
  .then(data => res.render('index.hbs', {clues: data}))
}

const deleteAndRender = (req, res) => {
  Clue.findOneAndRemove({_id: req.params.id})
  .then(clue => Clue.find({}).sort({created_at: 1}))
  .then(data => res.redirect('/'))
}

const createAndRender = (req, res) => {
  console.log(req.body)
  Clue.create(req.body)
  .then(clue => res.redirect('/'))
}

module.exports = {renderManagerPage, deleteAndRender, createAndRender}
