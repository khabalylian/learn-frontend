import { useState } from 'react';
import styles from './Literature.module.css';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MotionWrapper } from '../../helpers/helpers';

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
		<MotionWrapper>
			<div className={styles.literature}>
				<Accordion
					expanded={firstSelect === 'panel1'}
					onChange={handleChangeFirstLevel('panel1')}
					sx={{
						maxWidth: '70%',
						backgroundColor: '#27476e',
						color: '#bbd1ea'
					}}
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
							sx={{ backgroundColor: '#27476e', color: '#bbd1ea' }}
						>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls='panel1a-content'
								id='panel1a-header'
							>
								<Typography>Для початківців</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<ol className={styles.literatureList}>
									<li>
										<Typography>
											JavaScript повне керівництво - Девід
											Фленаган
										</Typography>
									</li>
									<li>
										<Typography>
											JavaScript з нуля - Кірупа Чиннатхамбі
										</Typography>
									</li>
									<li>
										<Typography>
											Head First Javascript Programming - Ерік
											Фрімен, Елізабед Робсон
										</Typography>
									</li>
								</ol>
							</AccordionDetails>
						</Accordion>
						<Accordion
							expanded={secondSelect === 'panel2'}
							onChange={handleChangeSecondLevel('panel2')}
							sx={{ backgroundColor: '#27476e', color: '#bbd1ea' }}
						>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls='panel1a-content'
								id='panel1a-header'
							>
								<Typography>Для просунутих</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<ol className={styles.literatureList}>
									<li>
										<Typography>
											Сучасний JavaScript для нетерплячих -
											Кей С. Хорстман
										</Typography>
									</li>
									<li>
										<Typography>
											Выразительный JavaScript - Марейн
											Хавербек
										</Typography>
									</li>
								</ol>
							</AccordionDetails>
						</Accordion>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={firstSelect === 'panel2'}
					onChange={handleChangeFirstLevel('panel2')}
					sx={{
						width: '70%',
						backgroundColor: '#27476e',
						color: '#bbd1ea'
					}}
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
							expanded={secondSelect === 'panel3'}
							onChange={handleChangeSecondLevel('panel3')}
							sx={{ backgroundColor: '#27476e', color: '#bbd1ea' }}
						>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls='panel1a-content'
								id='panel1a-header'
							>
								<Typography>Для початківців</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<ol className={styles.literatureList}>
									<li>
										<Typography>
											HTML та CSS. Розробка та дизайн
											веб-сайтів - Джон Дакетт
										</Typography>
									</li>
									<li>
										<Typography>
											Вивчаєм HTML, XHTML и CSS - Робсон Е.,
											Фрімен Е.
										</Typography>
									</li>
									<li>
										<Typography>
											HTML та CSS. Розробка та дизайн
											веб-сайтів - Джон Дакетт
										</Typography>
									</li>
								</ol>
							</AccordionDetails>
						</Accordion>
						<Accordion
							expanded={secondSelect === 'panel4'}
							onChange={handleChangeSecondLevel('panel4')}
							sx={{ backgroundColor: '#27476e', color: '#bbd1ea' }}
						>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls='panel1a-content'
								id='panel1a-header'
							>
								<Typography>Для просунутих</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<ol className={styles.literatureList}>
									<li>
										<Typography>
											CSS для профі - Кіт Грант
										</Typography>
									</li>
									<li>
										<Typography>
											Велика книга CSS3 - Девід Макфарланд
										</Typography>
									</li>
								</ol>
							</AccordionDetails>
						</Accordion>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={firstSelect === 'panel3'}
					onChange={handleChangeFirstLevel('panel3')}
					sx={{
						width: '70%',
						backgroundColor: '#27476e',
						color: '#bbd1ea'
					}}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1a-content'
						id='panel1a-header'
					>
						<Typography>Книги React</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<ol className={styles.literatureList}>
							<li>
								<Typography>React швидко - Азат Мардан</Typography>
							</li>
							<li>
								<Typography>
									Вивчаємо React - Кірупа Чіннатамбі
								</Typography>
							</li>
							<li>
								<Typography>
									React: сучасні шаблони для розробки додатків
									2-ге видання - Алекс Бенкс, Єва Порселпо
								</Typography>
							</li>
						</ol>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={firstSelect === 'panel4'}
					onChange={handleChangeFirstLevel('panel4')}
					sx={{
						width: '70%',
						backgroundColor: '#27476e',
						color: '#bbd1ea'
					}}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1a-content'
						id='panel1a-header'
					>
						<Typography>Варто прочитати</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<ol className={styles.literatureList}>
							<li>
								<Typography>
									Код. Таємна мова інформатики - Чарльз Петцольд
								</Typography>
							</li>
							<li>
								<Typography>
									Grokking Algorithms - Бхаргава А.
								</Typography>
							</li>
							<li>
								<Typography>
									Crafting Interpreters - Роберт Нюстрем
								</Typography>
							</li>
							<li>
								<Typography>
									Inside the Machine - Джон Стоукс
								</Typography>
							</li>
						</ol>
					</AccordionDetails>
				</Accordion>
			</div>
		</MotionWrapper>
    );
};
