import React, { useEffect, useRef } from 'react';

export type Props = {
  text: string;
  lowerCase?: true;
  speed?: number;
  styles?: {
    [key: string]: string | number;
  };
  loops?: 1 | 2 | 3;
};

export const AiText = ({
  text,
  speed = 50,
  lowerCase,
  loops = 3,
  styles = {},
}: Props) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUWVXYZ';
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      const _text = text
        ?.split('')
        .map((_, i) => {
          if (i < iteration) {
            return text[i];
          }
          return alphabet[Math.floor(Math.random() * 26)];
        })
        .join('');

      textRef.current!.innerText! = lowerCase
        ? _text.toLowerCase()
        : _text.toUpperCase();

      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / loops;
    }, speed);
    return () => {
      clearInterval(interval);
    };
  }, [text, speed, lowerCase]);

  return (
    <p ref={textRef} style={{ ...styles }}>
      {}
    </p>
  );
};
