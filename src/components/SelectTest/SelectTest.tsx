import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AppContext } from '../../context/app.context';

export const SelectTest = () => {
	const [test, setTest] = useState<string>('');

    const { setSelectTest } = useContext(AppContext);

	const handleChange = (event: SelectChangeEvent) => {
        setSelectTest?.(event.target.value);
        setTest(event.target.value);
    };

    return (
        <Box >
            <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
                <InputLabel
                    sx={{ fontSize: '0.7em', color: '#bbd1ea' }}
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
                </Select>
            </FormControl>
        </Box>
    );
};
