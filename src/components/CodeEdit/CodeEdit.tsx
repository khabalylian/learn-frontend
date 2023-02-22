import styles from './CodeEdit.module.css';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';
import React from 'react';


export const CodeEdit = ({text }: { text: string }) => {
    return (
        <Editor
            value={text}
            onValueChange={code => text}
            highlight={code => highlight(code, languages.js)}
            style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: '18px',
                outline: 0,
                lineHeight: 1.3,
                backgroundColor: '#1b263b',
                borderRadius: '5px',
                padding: '5px 10px'
            }}
            textareaClassName={styles.editArea}
        />
    );
};