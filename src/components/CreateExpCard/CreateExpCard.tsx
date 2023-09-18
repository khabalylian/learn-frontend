import React from 'react';
import { FC, useEffect, ReactNode } from 'react';
import { CodeEdit } from '../CodeEdit/CodeEdit';
import ReactMarkdown from 'react-markdown';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';


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
			
		if(input){
			input[id-1].name = String(id);
		}
    }, []);

    return (
        <div className={styles.wrapper}>
            <h3>{title}</h3>
            <hr />
            {children}
        </div>
    );
};
