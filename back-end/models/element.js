const mongoose = require('mongoose');

const elementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    progress: {
        type: Number,
        default: 0,
    },
    description: String,
    topics: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Topic', // Reference to the Topic model
        },
    ],
});

const Element = mongoose.model('Element', elementSchema);

module.exports = Element;
