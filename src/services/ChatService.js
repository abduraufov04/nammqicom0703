// ChatService.js

class ChatService {
    // Simulated data storage for chat messages
    static chatMessages = [];
  
    // Method to send a message
    static sendMessage(message, senderId, receiverId) {
      const newMessage = {
        id: this.chatMessages.length + 1,
        message,
        senderId,
        receiverId,
        timestamp: new Date().toISOString(),
      };
      this.chatMessages.push(newMessage);
      return newMessage;
    }
  
    // Method to get messages between two users
    static getMessagesBetweenUsers(userId1, userId2) {
      return this.chatMessages.filter(
        (message) =>
          (message.senderId === userId1 && message.receiverId === userId2) ||
          (message.senderId === userId2 && message.receiverId === userId1)
      );
    }
  }
  
  export default ChatService;
  