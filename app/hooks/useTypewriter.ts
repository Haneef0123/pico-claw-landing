"use client";

import { useState, useEffect, useCallback } from "react";

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  deleteSpeed?: number;
  pause?: number;
  loop?: boolean;
  onComplete?: () => void;
}

interface UseTypewriterReturn {
  displayText: string;
  isTyping: boolean;
  isDeleting: boolean;
  isComplete: boolean;
  restart: () => void;
}

export function useTypewriter({
  text,
  speed = 50,
  deleteSpeed = 30,
  pause = 1500,
  loop = false,
  onComplete,
}: UseTypewriterOptions): UseTypewriterReturn {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [index, setIndex] = useState(0);

  const restart = useCallback(() => {
    setDisplayText("");
    setIsTyping(false);
    setIsDeleting(false);
    setIsComplete(false);
    setIndex(0);
  }, []);

  useEffect(() => {
    if (index === 0 && !isTyping && !isDeleting) {
      setIsTyping(true);
    }
  }, [index, isTyping, isDeleting]);

  useEffect(() => {
    if (isTyping && !isDeleting) {
      if (index < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(text.slice(0, index + 1));
          setIndex(index + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        setIsComplete(true);
        onComplete?.();
        
        if (loop) {
          const timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pause);
          return () => clearTimeout(timeout);
        }
      }
    }
  }, [isTyping, isDeleting, index, text, speed, pause, loop, onComplete]);

  useEffect(() => {
    if (isDeleting) {
      if (index > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(text.slice(0, index - 1));
          setIndex(index - 1);
        }, deleteSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setIsComplete(false);
        setIsTyping(true);
      }
    }
  }, [isDeleting, index, text, deleteSpeed]);

  return {
    displayText,
    isTyping,
    isDeleting,
    isComplete,
    restart,
  };
}

export function useClipboard() {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      return true;
    } catch (err) {
      console.error("Failed to copy:", err);
      return false;
    }
  }, []);

  return { copied, copy };
}
