const Suggestion = require("../model/Suggestion");

module.exports = {
    getAllSuggestion: (body, callback) => {
        Suggestion.find(body, function (err, foundSuggestion) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, foundSuggestion)
            }
        });
    },
    getSingleSelectionById: (id, callback) => {
        Suggestion.findById(id, function (err, foundSuggestion) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, foundSuggestion)
            }
        })
    },
    createSuggestion: (body, callback) => {
        const createdSuggestion = new Suggestion({
            Title: body.Title,
            Author: body.Author,
            Suggestion: body.Suggestion,
            Likes: body.Likes,
            Anonymous: body.Anonymous,
        })
        createdSuggestion.save(function (err, savedSuggestion) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, savedSuggestion)
            }
        });
    },
    updateSuggestion: (id, body, callback) => {
        Suggestion.findByIdAndUpdate(id, body, { new: true }, function (err, updatedSuggestion) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, updatedSuggestion)
            }
        })
    },
    deleteSuggestion: (id, callback) => {
        Suggestion.findByIdAndDelete(id, function (err, deletedSuggestion) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, deletedSuggestion)
            }
        });
    }
}

