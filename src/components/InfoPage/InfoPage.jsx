import styles from './InfoPage.module.css';

export const InfoPage = ({ children }) => {
    return (
        <div className={styles.infoPage}>
            <h3 className={styles.author}>Текст взято з сайту:</h3>
            {children}
        </div>
    );
};
