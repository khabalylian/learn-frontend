import { FC, useEffect } from 'react';
import styles from './CreateExpCard.module.css';

interface CreateExpCardProps {
    children: string;
    title: string;
    id: number;
}

export const CreateExpCard: FC<CreateExpCardProps> = ({
    children,
    title,
    id
}) => {
    useEffect(() => {
        const input: NodeListOf<HTMLInputElement> =
            document.querySelectorAll('input[data-exp]');
        input[id - 1].name = String(id);
    }, [children, id]);

    return (
        <div className={styles.wrapper}>
            <h3>{title}</h3>
            <hr />
            {children}
        </div>
    );
};
