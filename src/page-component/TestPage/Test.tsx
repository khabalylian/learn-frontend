import { SyntheticEvent, useContext, useEffect, useState } from 'react';
import styles from './Test.module.css';

import { TestCard } from '../../components/TestCard/TestCard';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../auth/firebase.config';
import { AppContext, IAppContext } from '../../context/app.context';
import { useParams } from 'react-router-dom';
import { GenericObject } from '../../components/ResultCard/ResultCard';
import { ResultTesting } from '../../components/ResultTesting/ResultTesting';

export interface Data {
    id: number;
    title: string;
    correctVariant: number;
    variants: string[];
    question: string;
    correctQuestion?: GenericObject;
    changeForm?: (e: SyntheticEvent, id: number) => void;
}

export const Test = (): JSX.Element => {
    const [data, setData] = useState<Array<Data>>([]);
    const [showResult, setShowResult] = useState<boolean>(false);
    const [correctQuestion, setCorrectQuestion] = useState({});

    const { selectTest } = useContext<IAppContext>(AppContext);
    const { select } = useParams();

    console.log(correctQuestion);

    useEffect(() => {
        if (select) {
            getData(select);
        } else {
            getData(selectTest);
        }
    }, [selectTest, select]);

    function changeForm(e: SyntheticEvent, id: number) {
        setCorrectQuestion({
            ...correctQuestion,
            [id]: +(e.target as HTMLInputElement).value
        });
    }

    async function getData(selectTest: string) {
        const completeData: Array<Data> = [];

        const querySnapshot = await getDocs(collection(db, selectTest));

        querySnapshot.forEach(data => {
            const result = data.data() as Data;
            completeData.push(result);
        });
        setData(completeData);
    }

    return (
        <div className={styles.wrapper}>
            {!showResult ? (
                <div className={styles.testing}>
                    {data.map((item: Data, index) => (
                        <TestCard
                            key={index}
                            {...item}
                            changeForm={changeForm}
                        />
                    ))}

                    <button
                        className={styles.showResult}
                        onClick={e => {
                            window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: 'smooth'
                            });
                            setShowResult(true);
                        }}
                    >
                        Показати Результат
                    </button>
                </div>
            ) : (
                <ResultTesting data={data} correctQuestion={correctQuestion} />
            )}
        </div>
    );
};
