'use client';
import { useState, useEffect, useCallback } from "react";

export function useTyping({ text, delay }) {
    const [word, setWord] = useState('');
    const [index, setIndex] = useState(0);

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
