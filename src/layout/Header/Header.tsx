import styles from './Header.module.css';
import cn from 'classnames';
import { useContext, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { AppContext } from '../../context/app.context';

import { useLocation } from 'react-router-dom';

export const Header = ({className}: {className: string}) => {
	const [test, setTest] = useState<string>('');
	
	const pathname = useLocation().pathname.substring(1).split('/');

	const { setSelectTest } = useContext(AppContext)

	useEffect(() => {
		if (pathname[0] === 'test') {
            setTest(pathname[1]);
        }else {
			setTest('');
		}
	}, [pathname])

	const handleChange = (event: SelectChangeEvent) => {

		setSelectTest?.(event.target.value)
		setTest(event.target.value)
	};

	return (
        <header className={cn(className, styles.header)}>
			<Link to='literature'>
				<h3 className={styles.literature}>Література</h3>
			</Link>
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
                            <Link to='test/JavaScript'>JavaScript</Link>
                        </MenuItem>
                        <MenuItem value='React'>
                            <Link to='test/React'>React</Link>
                        </MenuItem>
                        <MenuItem value='HTML'>
                            <Link to='test/HTML'>HTML</Link>
                        </MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </header>
    );
}