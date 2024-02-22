import { useEffect } from 'react';
import clockSound from './clock.mp3';
export function PlaySound({ status }) {
    useEffect(() => {
        if (status === 'work' || status === 'break') {
            const audioElement = new Audio(clockSound);
            audioElement.play();
        }
    }, [status]);
}

