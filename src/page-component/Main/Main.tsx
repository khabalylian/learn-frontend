import { Suspense, lazy} from 'react';
import { useParams } from 'react-router-dom';
import styles from './Main.module.css';
import { MotionWrapper } from '../../helpers/helpers';


export const Main = (): JSX.Element => {
    const { typeId, id } = useParams();
	
    const MyLazyComp = lazy(
        () => import(`../../Documentation/${id}/${typeId}/${typeId}.mdx`)
    );

    return (
        <Suspense fallback={<div>Loading...</div>}>
                <div
                    key={typeId}
                    className={styles.documentation}
                >
					<MotionWrapper>
                   		<MyLazyComp />
					</MotionWrapper>
                </div>
        </Suspense>
    );
};
