import { FC } from 'react';
import Alert from '@mui/material/Alert';
import { AlertProps } from '@mui/material/Alert';

import styles from './Alerts.module.css';


export const Alerts: FC<AlertProps> = ({ severity, variant, children }) => {
    return (
        <Alert severity={severity} variant={variant} style={{fontSize: '1em'}} className={styles.alert}>
           {children}
        </Alert>
    );
};