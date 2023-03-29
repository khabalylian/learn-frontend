import { useEffect, useState } from 'react';

import styles from './Timer.module.css';

export interface TimerProps {
	setShowResult: (showResult: boolean) => void;
    setCurrentQuestion: (currentQuestion: number) => void;
    currentQuestion: number;
}

export const Timer = ({
    setCurrentQuestion,
    currentQuestion,
    setShowResult,
}: TimerProps) => {
    const [timer, setTimer] = useState<number>(90);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            transformTime(timer);
            setTimer(timer => timer - 1);
        }, 1000);
		
		if(currentQuestion === 14 && timer < 0) {
			setShowResult(true);
		}

        if (timer < 0) {
            clearInterval(interval);
            setCurrentQuestion(++currentQuestion);
        }


        return () => clearInterval(interval);
    }, [timer]);

	useEffect(() => {
		transformTime(timer);
	}, [])

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