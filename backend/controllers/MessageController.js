import { Conversation } from "../models/conversationModel.js";
import { Message } from "../models/messageModel.js";
export const sendMessage = async (req, res) => {
  try {
    const senderId = req.id;
    const receiverId = req.params.id;
    const { message } = req.body;

    let getConversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!getConversation) {
      getConversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = await Message.create({ senderId, receiverId, message });
    if (newMessage) {
      getConversation.messages.push(newMessage._id);
    }

    await getConversation.save();

    return res.status(200).json({
      message: "message sent sucessfully",
      newMessage: newMessage,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getMessage = async (req, res) => {
  try {
    const senderId = req.id;
    const receiverId = req.params.id;

    const getConversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");
    return res.status(200).json({
      message: "sucessfully recived messages",
      messages: getConversation?.messages,
    });
  } catch (error) {
    console.log(error);
  }
};
