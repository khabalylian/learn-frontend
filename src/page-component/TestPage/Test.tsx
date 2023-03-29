import { SyntheticEvent } from 'react';

import { SelectTest } from '../../components/SelectTest/SelectTest';

import styles from './Test.module.css';


export const Test = (): JSX.Element => {
    return (
        <div className={styles.test}>
            <div className={styles.info}>
                <h3 className={styles.infoText}>
                    Інструкція для початку тесту:
                </h3>
                <ol className={styles.infoList}>
                    <li className={styles.infoItem}>
                        Буде надано 15 питань різної складності.
                    </li>
                    <li className={styles.infoItem}>
                        Для відповіді на кожне питання буде надано 1:30.
                    </li>
                    <li className={styles.infoItem}>
                        Для початку виберіть тест.
                    </li>
                    <li className={styles.infoItem}>
                        Після вибрання тесту він начнеться автоматично.
                    </li>
                    <li className={styles.infoItem}>
                        При початку тесту не обновляйте та не зайкривайте
                        вкладку.
                    </li>
                </ol>
            </div>
            <h2 className={styles.title}>Вирати Тест:</h2>
            <SelectTest />
        </div>
    );
};
