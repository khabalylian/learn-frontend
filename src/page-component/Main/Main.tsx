import { Suspense, lazy} from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Main.module.css';


export const Main = (): JSX.Element => {
    const { typeId, id } = useParams();
	
    const MyLazyComp = lazy(
        () => import(`../../Documentation/${id}/${typeId}/${typeId}.mdx`)
    );

    return (
        <Suspense>
            <AnimatePresence mode='wait'>
                <motion.div
                    key={typeId}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ position: 'relative', padding: '50px 0' }}
                    className={styles.documentation}
                >
                    <MyLazyComp />
                </motion.div>
            </AnimatePresence>
        </Suspense>
    );
};
