import { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
function Sound({ status }) {
    useEffect(() => {
        if (status === 'work' || status === 'break') {
            const audioElement = new Audio('./public/sounds/clock.mp3');
            audioElement.play();
        }
    }, [status]);

    return null;
}

export default Sound;