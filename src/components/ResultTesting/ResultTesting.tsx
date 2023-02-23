import { Data } from '../../page-component/TestPage/Test';
import { GenericObject, ResultCard } from '../ResultCard/ResultCard';
import styles from './ResultTesting.module.css';

interface ResultTestingProps {
    data: Array<Data>;
    correctQuestion: GenericObject
}

export const ResultTesting = ({
    data,
    correctQuestion
}: ResultTestingProps): JSX.Element => {


	function showCorrectVariant () {
		return data.map(item => item.correctVariant === correctQuestion?.[item.id]).filter(item => item).length
	}

	console.log(showCorrectVariant());

    return (
        <div className={styles.resultTesting}>
            <div className={styles.resultInfo}>
                <span>{showCorrectVariant()}</span> з <span>{data.length}</span> Правильних відповідей
            </div>
            {data.map((item: Data, index) => (
                <ResultCard
                    key={index}
                    {...item}
                    correctQuestion={correctQuestion}
                />
            ))}
        </div>
    );
};
