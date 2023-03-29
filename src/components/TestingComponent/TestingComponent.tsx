import { SyntheticEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../auth/firebase.config';

import styles from './TestingComponent.module.css';

import CircularProgress from '@mui/material/CircularProgress';

import { TestCard, ResultTesting } from '../index';

export interface GenericObject extends Record<number, number> {
    index: number;
}
export interface Data {
    id: number;
    title: string;
    correctVariant: number;
    variants: string[];
    question: string;
    correctQuestion?: GenericObject;
    changeForm?: (e: SyntheticEvent, id: number) => void;
}

export const TestingComponent = () => {
    const [data, setData] = useState<Array<Data>>([]);
    const [showResult, setShowResult] = useState<boolean>(false);
    const [correctQuestion, setCorrectQuestion] = useState({});
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [loading, setLoading] = useState(true);

    const { select } = useParams();

    useEffect(() => {
        if (select) {
            getData(select);
        }
    }, []);

    function changeForm(e: SyntheticEvent, id: number) {
        setCorrectQuestion({
            ...correctQuestion,
            [id]: +(e.target as HTMLInputElement).value
        });
    }

    function mixData(data: Array<Data>) {
        return data.sort(() => Math.random() - 0.5).splice(0, 15);
    }

    async function getData(selectTest: string) {
        const completeData: Array<Data> = [];

        const querySnapshot = await getDocs(collection(db, selectTest));

        querySnapshot.forEach(data => {
            const result = data.data() as Data;
            completeData.push(result);
        });
        setData(mixData(completeData));
        setLoading(false);
    }

    function renderTest() {
        return data.map((item: Data, index: number) => {
            return (
                <TestCard
                    key={index}
                    {...item}
                    changeForm={changeForm}
                    currentQuestion={currentQuestion}
                    setCurrentQuestion={setCurrentQuestion}
                    setShowResult={setShowResult}
                />
            );
        });
    }
    const loadingTest = loading ? <CircularProgress /> : null;
    const test = !showResult ? (
        <>
            {loadingTest || (
                <div className={styles.testing}>
                    {currentQuestion + 1} / {data.length}
                    {renderTest()[currentQuestion]}
                </div>
            )}
        </>
    ) : (
        <ResultTesting data={data} correctQuestion={correctQuestion} />
    );

    return <div className={styles.wrapper}>{test}</div>;
};
