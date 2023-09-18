import { ChangeEvent, FC, useEffect, useState} from 'react';
import LazyLoad from 'react-lazy-load';
import Button from '@mui/material/Button';

import Exp from '../../task/task.mdx';
import { getData, MotionWrapper } from '../../helpers/helpers';
import { ResultExp } from '../../components/index.jsx';
import styles from './ExercisesPage.module.css';

interface DataExp {
    id?: number;
    value: string | '';
}

export interface CorrectVariant {
    variant: string;
    correctVariant: string;
    result: boolean;
}

export interface DataCorrectVariant extends Record<string, string> {
    index: string;
}

export const ExercisesPage: FC = () => {
    const [checkLoad, setCheckLoad] = useState<boolean>(false);
    const [showResult, setShowResult] = useState<boolean>(false);
    const [dataExp, setDataExp] = useState<DataExp[]>([]);
    const [resultExp, setResultExp] = useState<CorrectVariant[]>([]);

    const handlerChange = (e: Event) => {
        const changeEvent = e as unknown as ChangeEvent<HTMLInputElement>;
        const { name, value } = changeEvent.target;

        setDataExp(data => {
            return data.map(objValue => {
                if (objValue.id === +name) {
                    return {
                        id: objValue.id,
                        value: value.trim()
                    };
                }

                return objValue;
            });
        });
    };

    const handleSubmit = () => {
        getData<DataCorrectVariant>('ExpCorrectVariant').then(data => {
            dataExp.forEach((item, index) => {
                const currentVariant = data[0][index + 1];

                setResultExp(prev => [
                    ...prev,
                    {
                        variant: item.value,
                        correctVariant: currentVariant,
                        result: item.value === currentVariant
                    }
                ]);
            });
        });
        setShowResult(true);
    };

    useEffect(() => {
        const inputs: NodeListOf<HTMLInputElement> =
            document.querySelectorAll('input[data-exp]');

        Array.from(inputs).forEach(input => {
            setDataExp(data => [
                ...data,
                { id: +input.name, value: 'Не вказано' }
            ]);
            input.addEventListener('change', handlerChange);
        });
    }, [checkLoad]);

    return (
        <MotionWrapper>
            {!showResult ? (
                <>
                    <LazyLoad
                        onContentVisible={() => setCheckLoad(true)}
                        className={styles.wrapper}
                    >
                        <Exp />
                    </LazyLoad>
                    <Button
                        onClick={handleSubmit}
                        variant='outlined'
                        className={styles.expBtn}
                    >
                        Перевірити результат
                    </Button>
                </>
            ) : (
                <ResultExp resultExp={resultExp} />
            )}
		</MotionWrapper>
    );
};
