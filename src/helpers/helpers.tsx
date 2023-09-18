
import { collection, getDocs } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';
import { db } from '../auth/firebase.config';


async function getData<T>(selectTest: string): Promise<T[]> {
	const completeData: T[] = [];

	const querySnapshot = await getDocs(collection(db, selectTest));

	querySnapshot.forEach(async (data) => {
		const result = data.data() as T;
		completeData.push(result);
	});

	return completeData;
}

const MotionWrapper: FC<PropsWithChildren> = ({children}) => {
	return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
}


export { getData, MotionWrapper};