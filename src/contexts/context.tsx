import React, {Dispatch, FC, ReactNode, SetStateAction, useContext, useState} from 'react';

export interface IContext {
    isMemo: boolean;
    setIsMemo: Dispatch<SetStateAction<boolean>>;
    title: string;
    value: string | number;
    setValue: Dispatch<SetStateAction<string | number>>;
}

const defaultState = {
    isMemo: false,
    setIsMemo: () => {},
    title: 'Context receiver',
    value: 'Do update',
    setValue: (value: string | number) => {},
} as IContext

export const MyContext = React.createContext<IContext>(defaultState);

interface MyContextProviderProps {
    children: ReactNode;
}

export const MyContextProvider: FC<MyContextProviderProps> = ({children}) => {
    const [isMemo, setIsMemo] = useState<boolean>(false);
    const [value, setValue] = useState<string | number>('Do update');
    const title = 'context receiver'
    return (
        <MyContext.Provider value={{isMemo, setIsMemo, value, setValue, title}}>
            {children}
        </MyContext.Provider>
    );
};