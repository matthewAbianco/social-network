const { Schema, model, Types} = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        // Use Mongoose's ObjectId data type
        // Default value is set to a new ObjectId

    },
    
    reactionBody: {
    type: String,
    required: true,
    maxLength: 280
    },

    username: {

    },
    createdAt
});

const thoughtSchema = new Schema ({
    
})