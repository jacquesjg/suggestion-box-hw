const mongoose = require("mongoose");

const suggestionSchema = new mongoose.Schema(
    {
        Title: {
            type: String,
            lowercase: true,
            unique: true,
            required: true,
        },
        Author: {
            type: String,
            lowercase: true,
        },
        Suggestion: {
            type: String,
            lowercase: true,
            required: true,
        },
        Likes: {
            type: Number,
            default: 0,
        },
        Anonymous: {
            type: Boolean,
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("suggestion", suggestionSchema);