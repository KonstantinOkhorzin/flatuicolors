import { FC, useRef, useEffect } from 'react';

import { Container, Message } from './FullScreenColor.styled';

import successSound from '../../assets/sounds/notify.mp3';
import errorSound from '../../assets/sounds/error.mp3';

interface Props {
  color: string;
  closeFullScreenColor: () => void;
}

const FullScreenColor: FC<Props> = ({ color, closeFullScreenColor }) => {
  const intervalId = useRef<number | null>(null);
  const intervalDuration = import.meta.env.VITE_FULL_SCREEN_COLOR_INTERVAL ?? 1000;

  const feedbackMessages: Array<string> = [
    'paste me!',
    'will do!',
    'copied!',
    'it`ll rock!',
    'right one!',
    'got it!',
  ];

  const getRandomMessage = (messages: Array<string>): string => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex].toLocaleUpperCase();
  };

  const messageText = getRandomMessage(feedbackMessages);

  useEffect(() => {
    navigator.clipboard
      .writeText(color)
      .then(() => new Audio(successSound).play())
      .catch(() => new Audio(errorSound).play());

    intervalId.current = setInterval(() => closeFullScreenColor(), intervalDuration);

    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, [closeFullScreenColor, color, intervalDuration]);

  return (
    <Container bgColor={color}>
      <Message>
        {messageText}
        <span>{color}</span>
      </Message>
    </Container>
  );
};

export default FullScreenColor;
