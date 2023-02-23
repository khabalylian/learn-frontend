import { useState } from 'react';
import styles from './Literature.module.css';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const LiteraturePage = () => {
	const [firstSelect, setFirstSelect] = useState<string | false>(false);
	const [secondSelect, setSecondSelect] = useState<string | false>(false);

	 const handleChangeFirstLevel =
         (panel: string) =>
         (event: React.SyntheticEvent, isExpanded: boolean) => {
             setFirstSelect(isExpanded ? panel : false);
         };

	const handleChangeSecondLevel =
		(panel: string) =>
		(event: React.SyntheticEvent, isExpanded: boolean) => {
			setSecondSelect(isExpanded ? panel : false);
		};

    return (
        <div className={styles.literature}>
            <Accordion
                expanded={firstSelect === 'panel1'}
                onChange={handleChangeFirstLevel('panel1')}
                sx={{ width: '50%', margin: '0px' }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                >
                    <Typography>Книги JavaScript</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Accordion
                        expanded={secondSelect === 'panel1'}
                        onChange={handleChangeSecondLevel('panel1')}
                        sx={{}}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls='panel1a-content'
                            id='panel1a-header'
                        >
                            <Typography>Книги JavaScript</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={firstSelect === 'panel2'}
                onChange={handleChangeFirstLevel('panel2')}
                sx={{ width: '50%', margin: '0px' }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                >
                    <Typography>Книги HTML&CSS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Accordion
                        expanded={secondSelect === 'panel2'}
                        onChange={handleChangeSecondLevel('panel2')}
                        sx={{}}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls='panel1a-content'
                            id='panel1a-header'
                        >
                            <Typography>Книги JavaScript</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={firstSelect === 'panel3'}
                onChange={handleChangeFirstLevel('panel3')}
                sx={{ width: '50%', margin: '0px' }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                >
                    <Typography>Книги React</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Accordion
                        expanded={secondSelect === 'panel3'}
                        onChange={handleChangeSecondLevel('panel3')}
                        sx={{}}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls='panel1a-content'
                            id='panel1a-header'
                        >
                            <Typography>Книги JavaScript</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};
