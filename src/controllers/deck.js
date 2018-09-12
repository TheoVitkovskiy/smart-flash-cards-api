const { createDeck } = require('../services/deck');

module.exports.list = async (req, res) => {
    res.send('Here all decks will be returned.');
};

module.exports.get = async (req, res) => {
    res.send('Here the deck with the id of ' + req.params.deck + ' will be returned.');
};

module.exports.post = async ({ name }) => {
    return createDeck(name);
};

module.exports.delete = async (req, res) => {
    res.send('Here the card with the id of ' + req.params.deck + ' will be deleted.');
};