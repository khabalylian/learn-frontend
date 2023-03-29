import { Data, GenericObject } from '../TestingComponent/TestingComponent';
import styles from './ResultTesting.module.css';


interface ResultTestingProps {
    data: Array<Data>;
    correctQuestion: GenericObject;
}

export const ResultTesting = ({
    data,
    correctQuestion
}: ResultTestingProps): JSX.Element => {

	function showCorrectVariant () {
		return data
            .map(
                (item: Data) =>
                    item.correctVariant === correctQuestion?.[item.id]
            )
            .filter(item => item).length;
	}


    return (
        <div className={styles.resultTesting}>
			Вітаю ви завершили тест з результатом:
            <div className={styles.resultInfo}>
                <span>{showCorrectVariant()}</span> з <span>{data.length}</span>{' '}
                Правильних відповідей
            </div>
        </div>
    );
};
