const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

const Topic = mongoose.model('Topic', topicSchema, 'topics');

module.exports = Topic;
