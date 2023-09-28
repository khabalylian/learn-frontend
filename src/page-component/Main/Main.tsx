import { Suspense, lazy} from 'react';
import { useParams } from 'react-router-dom';
import styles from './Main.module.css';
import { MotionWrapper } from '../../helpers/helpers';


export const Main = (): JSX.Element => {
    const { typeId, id } = useParams();
	
	async function MyLazyComp () {
		await import(`../../Documentation/${id}/${typeId}/${typeId}.mdx`)
			.then(data => console.log(data))
	}

	console.log(MyLazyComp())

    return (
        <Suspense>
            <div key={typeId} className={styles.documentation}>
                <MotionWrapper>
                   
                </MotionWrapper>
            </div>
        </Suspense>
    );
};
