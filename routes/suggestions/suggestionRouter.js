const express = require("express");
const router = express.Router();
const suggestionController = require("./controller/suggestionController");

router.get("/all-suggestions", function (req, res, next) {
    suggestionController.getAllSuggestion({}, function (err, foundSuggestion) {
        if (err) {
            res
                .status(500)
                .json({
                    message: "Something went wrong!",
                    error: err.message
                })
        } else {
            res.json({ message: "success", foundSuggestion });
        }
    });
});

// find suggestion by id
router.get("/single-suggestion", function (req, res, next) {
    const { id } = req.params;
    suggestionController.getSingleSelectionById(id, function (err, foundSuggestion) {
        if (err) {
            res
                .status(500)
                .json({
                    message: "Something went wrong!",
                    error: err.message
                })
        } else {
            res.json({ message: "success", foundSuggestion });
        }
    });
});

// create suggestion
router.post("/create-suggestion", function (req, res, next) {
    suggestionController.createSuggestion(req.body, function (err, savedSuggestion) {
        if (err) {
            res
                .status(500)
                .json({
                    message: "Something went wrong!",
                    error: err.message
                })
        } else {
            res.json({ message: "success", savedSuggestion });
        }
    });
});

// update suggestion
router.put("/update-suggestion/:id", function (req, res) {
    const { id } = req.params
    suggestionController.updateSuggestion(
        id,
        req.body,
        function (err, updatedSuggestion) {
            if (err) {
                res
                    .status(500)
                    .json({
                        message: "Something went wrong!",
                        error: err.message
                    })
            } else {
                res.json({ message: "success", updatedSuggestion });
            }
        });
});

// delete suggestion
router.delete("/delete-suggestion/:id", function (req, res) {
    const { id } = req.params;
    suggestionController.deleteSuggestion(id, function (err, deletedSuggestion) {
        if (err) {
            res
                .status(500)
                .json({
                    message: "Something went wrong!",
                    error: err.message
                })
        } else {
            res.json({ message: "success", deletedSuggestion })
        }
    })
})


module.exports = router;