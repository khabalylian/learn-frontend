import styles from './CodeEdit.module.css';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';


export const CodeEdit = ({text}) => {

	
	return (
        <Editor
            value={text}
            onValueChange={code => text}
            highlight={code => highlight(code, languages.js)}
            style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
                outline: 0
            }}
            textareaClassName={styles.editArea}
        />
    );
}