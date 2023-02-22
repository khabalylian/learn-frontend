import { Data } from '../../page-component/Test';
import { CodeEdit } from '../CodeEdit/CodeEdit';
import styles from './ResultCard.module.css';
import cn from 'classnames';

export interface GenericObject {
	[key: number]: number,
}


export const ResultCard = ({title, question, variants, id, correctVariant, correctQuestion}: Data): JSX.Element => {
	
	function parseQuestion(question: string) {
        return question
            .split('~')
            .map(item => item.trim())
            .join('\n')
            .split('_')
            .map(item => item)
            .join('  ');
    }

	function correctVarians (index: number) {

		if(correctVariant === correctQuestion?.[id] && correctQuestion?.[id] === index){
			return true;
		}else if(index === correctQuestion?.[id]) {
			return true;
		}else {
			return false;
		}

	}

	function correctVarianColor (index: number, text: string) {

		if(((correctVariant === correctQuestion?.[id] && correctQuestion?.[id] === index) || index === correctVariant)){
			
			return (<span className={styles.textTrue}>{text}</span>);

		}else if (index === correctQuestion?.[id]){

			return (<span className={styles.textFalse}>{text}</span>);

		}

		return text;
	}


    return (
        <div
            className={cn(styles.resultCard, {
                [styles.true]: correctQuestion?.[id] === correctVariant,
                [styles.false]: correctQuestion?.[id] !== correctVariant
            })}
        >
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.example}>
                <CodeEdit text={parseQuestion(question)} />
            </div>
            <form>
                <div className={styles.wrapper}>
                    {variants.map((item: string, index) => (
                        <label key={item + index} className={styles.labelItem}>
                            <input
                                type='radio'
                                name='contact'
                                value={index}
                                checked={correctVarians(index + 1)}
                                readOnly
                            />
                            {correctVarianColor(index + 1, item)}
                        </label>
                    ))}
                </div>
            </form>
        </div>
    );
};