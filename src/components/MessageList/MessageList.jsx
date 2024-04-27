import { useEffect, useState } from "react";
import { getMessages } from "../../utils/firebaseMessages";

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages= async () => {
      const messages = await getMessages();
      setMessages(messages);
    }

    fetchMessages();
  }, []);

  return (
    <div>
      <h2>Messages</h2>
      <ul>
        {messages.map(message => (
          <li style={{ listStyle: 'none' }} key={message.messageID}>
            <p>ID: {message.messageID}</p>
            <p>prompts: {message.prompts}</p>
            <p>responses: {message.responses}</p>
            <p>platform: {message.platform}</p>
            <p>posted: {message.posted}</p>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default MessageList;
