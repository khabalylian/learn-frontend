import { Data } from '../../page-component/Test';
import { CodeEdit } from '../CodeEdit/CodeEdit';
import styles from './TestCard.module.css';

export const TestCard = ({title, question, variants, id, correctVariant, changeForm}: Data): JSX.Element => {

	function parseQuestion (question: string) {
		return question
            .split('~')
            .map(item => item.trim())
            .join('\n')
            .split('_')
            .map(item => item)
            .join('  ');
	}


    return (
        <div className={styles.testCard}>
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
        </div>
    );
};