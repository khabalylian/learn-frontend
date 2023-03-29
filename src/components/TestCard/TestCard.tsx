import Button from '@mui/material/Button';
import { motion } from 'framer-motion';

import { Data } from '../TestingComponent/TestingComponent';
import styles from './TestCard.module.css';

import { Timer, CodeEdit } from '../index';
interface TestCardProps extends Data {
    currentQuestion: number;
    setCurrentQuestion: (currentQuestion: number) => void;
	setShowResult: (showResult: boolean) => void;
}

export const TestCard = ({
    title,
    question,
    variants,
    id,
    correctVariant,
    changeForm,
    currentQuestion,
    setCurrentQuestion,
    setShowResult
}: TestCardProps): JSX.Element => {
    function parseQuestion(question: string) {
        return question
            .split('~')
            .map(item => item.trim())
            .join('\n')
            .split('_')
            .map(item => item)
            .join('  ');
    }

    return (
        <motion.div
            className={styles.testCard}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <Timer
                currentQuestion={currentQuestion}
                setCurrentQuestion={setCurrentQuestion}
                setShowResult={setShowResult}
            />
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.example}>
                <CodeEdit text={parseQuestion(question)} />
            </div>
            <form onChange={e => changeForm?.(e, id)}>
                <div className={styles.wrapper}>
                    <ol type='I' className={styles.list}>
                        {variants.map((item: string, index) => (
                            <li key={item}>
                                <label>
                                    <input
                                        type='radio'
                                        name='contact'
                                        value={index + 1}
                                        required
                                    />
                                    {item}
                                </label>
                            </li>
                        ))}
                    </ol>
                </div>
            </form>
            <div className={styles.btn}>
                {currentQuestion === 14 ? (
                    <Button
                        variant='outlined'
                        sx={{ width: '100px' }}
                        onClick={() => setShowResult(true)}
                    >
                        Завершити
                    </Button>
                ) : (
                    <Button
                        variant='outlined'
                        sx={{ width: '100px' }}
                        onClick={() => setCurrentQuestion(++currentQuestion)}
                    >
                        Далі
                    </Button>
                )}
            </div>
        </motion.div>
    );
};
