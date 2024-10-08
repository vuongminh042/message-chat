// helpers/getConversation.js

const { ConversationModel } = require('../models/ConversationModel');

const getConversationMessage = async (userId) => {
    const conversation = await ConversationModel.findOne({
        "$or": [
            { sender: userId, receiver: userId },
            { sender: userId, receiver: userId }
        ]
    }).populate('messages');

    return conversation?.messages || [];
};

module.exports = getConversationMessage;
