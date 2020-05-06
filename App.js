import React, {useState} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';

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
    setMessages(GiftedChat.append(messages, newMessages));
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

export default App;
