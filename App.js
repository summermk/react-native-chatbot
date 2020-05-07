import React, {useState} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import { DF_ACCESS_TOKEN } from 'react-native-dotenv'

const createChatbotMessage = (id, messageText) => {
  return {
    _id: id,
    text: messageText,
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'Chatbot',
      avatar: 'https://placeimg.com/140/140/any',
    },
  }
};

const App = () => {
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: 'Welcome!',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'Chatbot',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
  ]);



  const onSend = (newMessages = []) => {
    const temp = GiftedChat.append(messages, newMessages);
    setMessages(temp);
    const messageId = newMessages[0]._id + 1;
    sendMessageToChatbot(newMessages[0].text)
    .then((json) => {
      console.log(json);

      setMessages(GiftedChat.append(temp, createChatbotMessage(messageId, json.queryResult.fulfillmentText)));
    })
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={newMessages => onSend(newMessages)}
      user={{
        _id: 1,
      }}
    />
  );
};

function sendMessageToChatbot(message) {
  const projectId = "try-chatbot-272523";
  const sessionId = "ksjdhuh23uhkwjdhf";
  const authHeader = `Bearer ${DF_ACCESS_TOKEN}`;
  console.log(authHeader);
  return fetch(`https://dialogflow.googleapis.com/v2/projects/${projectId}/agent/sessions/${sessionId}:detectIntent`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: authHeader
    },
    body: JSON.stringify({
      "query_input": {
        "text": {
          "text": message,
          "language_code": "en-US"
        }
      }
    }),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
}

export default App;
