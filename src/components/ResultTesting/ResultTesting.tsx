import { Data } from '../../page-component/TestPage/Test';
import { GenericObject, ResultCard } from '../ResultCard/ResultCard';
import styles from './ResultTesting.module.css';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

interface ResultTestingProps {
    data: Array<Data>;
    correctQuestion: GenericObject
}

export const ResultTesting = ({
    data,
    correctQuestion
}: ResultTestingProps): JSX.Element => {

	const [select, setSelect] = useState<string | false>(false);

	function showCorrectVariant () {
		return data.map(item => item.correctVariant === correctQuestion?.[item.id]).filter(item => item).length
	}

	const handleChangeFirstLevel =
        (panel: string) =>
        (event: React.SyntheticEvent, isExpanded: boolean) => {
            setSelect(isExpanded ? panel : false);
        };


    return (
        <div className={styles.resultTesting}>
            <div className={styles.resultInfo}>
                <span>{showCorrectVariant()}</span> з <span>{data.length}</span>{' '}
                Правильних відповідей
            </div>
            <Accordion
                expanded={select === 'panel1'}
                onChange={handleChangeFirstLevel('panel1')}
                sx={{ backgroundColor: '#27476e', color: '#bbd1ea' }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                >
					Показати результат
				</AccordionSummary>
                <AccordionDetails>
                    {data.map((item: Data, index) => (
						<ResultCard
							key={index}
							{...item}
							correctQuestion={correctQuestion}
						/>
                    ))}
                </AccordionDetails>
            </Accordion>
        </div>
    );
};
