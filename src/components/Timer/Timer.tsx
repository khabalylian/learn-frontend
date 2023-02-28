import { useEffect, useState } from 'react';

import styles from './Timer.module.css';



export const Timer = ({
    setShowResult,
    showResult
}: {
    setShowResult: (select: boolean) => void,
    showResult: boolean
}) => {
    const [timer, setTimer] = useState<number>(10);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            transformTime(timer);
            setTimer(timer => timer - 1);
        }, 1000);

        if (timer < 0 || showResult) {
            clearInterval(interval);
            setShowResult(true);
        }

        return () => clearInterval(interval);
    }, [timer]);

    function transformTime(time: number) {
        setMinutes(Math.floor((time / 60) % 60));
        setSeconds(Math.floor(time % 60));
    }

    console.log('timer');
    return (
        <div className={styles.timer}>
            0{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
    );
};