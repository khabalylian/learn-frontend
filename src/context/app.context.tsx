import { createContext, PropsWithChildren, useState } from 'react';

export interface IAppContext {
	selectTest?: string,
	setSelectTest?: (selectTest: string) => void;
}

export const AppContext = createContext<IAppContext>({selectTest: ''});

export const AppContextProvider = ({ selectTest, children }: PropsWithChildren<IAppContext>): JSX.Element => {
	const [selectState, setSelectState] = useState(selectTest)

	const setSelectTest = (select: string) => {
		setSelectState(select);
	};

	return <AppContext.Provider value={{selectTest: selectState, setSelectTest}}>
			{children}
		</AppContext.Provider>
};