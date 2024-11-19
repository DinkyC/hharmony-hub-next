'use client';
import { useState, useEffect, useCallback } from "react";

interface TextProps {
    text: string,
    delay: number
}

export function useTyping({ text, delay }: TextProps) {
    const [word, setWord] = useState<string>('');
    const [index, setIndex] = useState<number>(0);

    const typeNextChar = useCallback(() => {
        setWord(prevWord => prevWord + text[index]);
        setIndex(prevIndex => prevIndex + 1);
    }, [text, index]);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(typeNextChar, delay);
            return () => clearTimeout(timeout);
        }
    }, [index, delay, text, typeNextChar]);

    return word;
}
