import { ReactNode } from 'react';
import styles from './InfoPage.module.css';

export const InfoPage = ({children}: {children: ReactNode}) => {
    return (
        <div className={styles.infoPage} style={{ background: 'white !important'}}>
            <h3 className={styles.author}>Текст взято з сайту:</h3>
            {children}
        </div>
    );
};
