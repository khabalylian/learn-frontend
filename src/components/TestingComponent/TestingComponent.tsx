import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../auth/firebase.config';

import { SyntheticEvent, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext, IAppContext } from '../../context/app.context';
import { Data } from '../../page-component/TestPage/Test';

import styles from './TestingComponent.module.css';
import { TestCard, ResultTesting, Timer } from '../index';


export const TestingComponent = () => {
	 const [data, setData] = useState<Array<Data>>([]);
     const [showResult, setShowResult] = useState<boolean>(false);
     const [correctQuestion, setCorrectQuestion] = useState({});

     const { selectTest } = useContext<IAppContext>(AppContext);
     const { select } = useParams();

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
     }
	 
	return (
        <div className={styles.wrapper}>
            <div className={styles.timer}>
                <Timer setShowResult={setShowResult} showResult={showResult} />
            </div>
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
}