import { FC, useRef, useEffect, useState } from 'react';

import { Container, Message } from './FullScreenColor.styled';
import { useSoundContext } from '../../hooks';

import successSound from '../../assets/sounds/notify.mp3';
import errorSound from '../../assets/sounds/error.mp3';

interface Props {
  color: string;
  closeFullScreenColor: () => void;
}

const FullScreenColor: FC<Props> = ({ color, closeFullScreenColor }) => {
  const intervalId = useRef<number | null>(null);
  const { soundEnabled } = useSoundContext();
  const intervalDuration = import.meta.env.VITE_FULL_SCREEN_COLOR_INTERVAL ?? 1000;
  const [error, setError] = useState<boolean>(false);

  const feedbackMessages: Array<string> = [
    'paste me!',
    'will do!',
    'copied!',
    'it`ll rock!',
    'right one!',
    'got it!',
  ];
  const errorMessage = 'oops! something went wrong'.toLocaleUpperCase();

  const getRandomMessage = (messages: Array<string>): string => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex].toLocaleUpperCase();
  };

  const messageText = !error ? getRandomMessage(feedbackMessages) : errorMessage;

  useEffect(() => {
    navigator.clipboard
      .writeText(color)
      .then(() => {
        if (soundEnabled) {
          new Audio(successSound).play();
        }
      })
      .catch(() => {
        if (soundEnabled) {
          new Audio(errorSound).play();
          setError(true);
        }
      });

    intervalId.current = setInterval(() => closeFullScreenColor(), intervalDuration);

    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, [closeFullScreenColor, color, intervalDuration, soundEnabled]);

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
