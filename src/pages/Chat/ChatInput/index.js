import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SubmitButton,
  ChatWindow,
  ChatBox,
  EmojiContainer,
  RelativeContainer
} from './styles';
import Emoji from '../Emoji';

export default function ChatInput ({ sendMessage }) {
  const [{ message }, setMessage] = useState({ message: '' });
  const [show, setShow] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    if (message.trim().split('<br>').join('') === '') {
      return;
    }

    sendMessage(message);
    setMessage({ message: '' });

  };

  const onEnterPress = e => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      handleSubmit(e);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setMessage(prev => Object.assign({}, prev, { [name]: value }));
  };

  const handleClick = (emoji, e) => {
    e.stopPropagation();
    if (typeof e.target.value !== 'string') {
      return;
    }
    setMessage(prev => ({ message: prev.message + emoji }));
  };

  const handleDisplayChange = e => {
    e.stopPropagation();
    setShow(prev => !prev);
  };

  return (
    <ChatBox>
        <EmojiContainer onClick={handleDisplayChange}>
          <RelativeContainer>
            Emoji
          </RelativeContainer>
          <Emoji show={show} handleClick={handleClick} />
        </EmojiContainer>
      <ChatWindow onKeyDown={onEnterPress} value={message} name="message" onChange={handleChange} />
      <SubmitButton onClick={handleSubmit}>
        Send Message
      </SubmitButton>
    </ChatBox>
  );
}

ChatInput.propTypes = {
  sendMessage: PropTypes.func
};