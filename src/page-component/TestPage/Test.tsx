import { SyntheticEvent, useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { GenericObject } from '../../components/ResultCard/ResultCard';

import styles from './Test.module.css';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/app.context';


export interface Data {
    id: number;
    title: string;
    correctVariant: number;
    variants: string[];
    question: string;
    correctQuestion?: GenericObject;
    changeForm?: (e: SyntheticEvent, id: number) => void;
}

export const Test = (): JSX.Element => {
	const [test, setTest] = useState<string>('');

    const { setSelectTest } = useContext(AppContext);

    const handleChange = (event: SelectChangeEvent) => {
        setSelectTest?.(event.target.value);
        setTest(event.target.value);
    };


    return (
        <div className={styles.test}>
            <div className={styles.info}>
                <h3 className={styles.infoText}>
                    Інструкція для початку тесту:
                </h3>
                <ol className={styles.infoList}>
                    <li className={styles.infoItem}>
                        Буде надано 15 питань різної складності.
                    </li>
                    <li className={styles.infoItem}>
                        Для відповіді на ці питання буде надано 7 хвилин.
                    </li>
                    <li className={styles.infoItem}>
                        Для початку виберіть тест.
                    </li>
                    <li className={styles.infoItem}>
                        Після вибрання тесту він начнеться автоматично.
                    </li>
                </ol>
            </div>
            <h2 className={styles.title}>Вирати Тест:</h2>
            <Box className={styles.box}>
                <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel
                        sx={{ fontSize: '0.7em', color: '#bbd1ea' }}
                        className={styles.inputLabel}
                        id='demo-simple-select-standard-label'
                    >
                        Test
                    </InputLabel>
                    <Select
                        labelId='demo-simple-select-standard-label'
                        id='demo-simple-select-standard'
                        value={test}
                        label='test'
                        onChange={handleChange}
                    >
                        <MenuItem value='JavaScript'>
                            <Link to='JavaScript'>JavaScript</Link>
                        </MenuItem>
                        <MenuItem value='React'>
                            <Link to='React'>React</Link>
                        </MenuItem>
                        <MenuItem value='HTML'>
                            <Link to='HTML'>HTML</Link>
                        </MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </div>
    );
};
