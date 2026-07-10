"use client";

import { useEffect, useState } from "react";

export function useTypingText(words, speed = 76, pause = 1100) {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activeWord = words[wordIndex] ?? "";
    const doneTyping = !isDeleting && letterIndex === activeWord.length;
    const doneDeleting = isDeleting && letterIndex === 0;

    const timeout = window.setTimeout(
      () => {
        if (doneTyping) {
          setIsDeleting(true);
          return;
        }

        if (doneDeleting) {
          setIsDeleting(false);
          setWordIndex((current) => (current + 1) % words.length);
          return;
        }

        setLetterIndex((current) => current + (isDeleting ? -1 : 1));
      },
      doneTyping ? pause : isDeleting ? speed * 0.55 : speed,
    );

    return () => window.clearTimeout(timeout);
  }, [isDeleting, letterIndex, pause, speed, wordIndex, words]);

  return words[wordIndex]?.slice(0, letterIndex) ?? "";
}
