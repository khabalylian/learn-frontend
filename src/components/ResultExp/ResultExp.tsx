import { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CorrectVariant } from '../../page-component/ExercisesPage/ExercisesPage';

import styles from './ResultExp.module.css';

export const ResultExp: FC<{ resultExp: CorrectVariant[] }> = ({
    resultExp
}) => {

	function countCorrectVariant() {
		return resultExp.reduce((acc, item) => item.result ? acc += 1: acc, 0);
	}

    return (
		<>
			<h2 className={styles.title}>
				{countCorrectVariant()} з {resultExp.length} Правельних відповідей!
			</h2>
			<div className={styles.wrapper}>
				{resultExp.map(
					(
						{ variant, correctVariant, result }: CorrectVariant,
						index
					) => (
						<Card
							key={index}
							sx={{
								minHeight: 275,
								backgroundColor: 'rgb(26, 32, 39)',
								flexBasis: '30%'
							}}
						>
							<span className={styles.countCard}>{index + 1}</span>
							<CardContent
								sx={{
									display: 'flex',
									flexDirection: 'column',
									color: 'white',
									fontSize: 20,
									gap: '20px',
									textAlign: 'center',
									height: '100%',
									marginTop: '20px'
								}}
							>
								<Typography gutterBottom>
									<span className={styles.text}>
										Ваш варіант:
									</span>{' '}
									{variant}
								</Typography>
								<Typography gutterBottom>
									<span className={styles.text}>
										Правельний варіант:
									</span>{' '}
									{correctVariant}
								</Typography>
								<Typography gutterBottom>
									<span className={styles.text}>Результат:</span>{' '}
									{result ? 'Правильно' : 'Неправильно'}
								</Typography>
							</CardContent>
						</Card>
					)
				)}
			</div>
		</>
    );
};
