import styles from './CodeEdit.module.css';
import React from 'react';
import cn from 'classnames';

import { CopyBlock, dracula } from 'react-code-blocks';


export const CodeEdit = ({text, variant }: { text: string, variant: string }) => {
    return (
		<div className={cn(styles.codeBlock, {
			[styles.standart] : variant === 'standart'
		})}>
			<CopyBlock
				language={'javascript'}
				text={text.trim()}
				theme={dracula}
				showLineNumbers
				codeBlock
			/>
		</div>
    );
};