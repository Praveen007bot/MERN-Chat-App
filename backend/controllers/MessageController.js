import { Conversation } from "../models/conversationModel.js";
import { Message } from "../models/messageModel.js";
export const sendMessage = async (req, res) => {
  try {
    const senderId = req.id;
    const receiverId = req.params.id;
    const { message } = req.body;

    let getConversation = await Conversation.findOne({
        participants:{$all: [senderId, receiverId] },
    });
    if (!getConversation) {
      getConversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = await Message.create({ senderId, receiverId, message });
    if (newMessage) {
        getConversation.message.push(newMessage._id);
    }

    await getConversation.save();

    return res.status(200).json({
        message: "message sent sucessfully"
    })


  } catch (error) {
    console.log(error);
  }
};


export const getMessage = async (req, res) => {
    try {
        const senderId = req.id;
        const receiverId = req.params.id;

        const getConversation = await Conversation.findOne({participants:{$all: [senderId,receiverId]}}).populate('message')
        console.log(getConversation);
        return res.status(200).json({
            message: 'sucessfully recived messages',
            messages: getConversation?.message
        })
    } catch (error) {
        console.log(error);
    }
}