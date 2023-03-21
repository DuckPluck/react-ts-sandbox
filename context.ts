import React from 'react';

export interface IContext {
    isMemo: boolean;
    title: string;
    value: string | number;
    setValue: () => void;
}

export const Context = React.createContext<IContext>({
    isMemo: false,
    title: 'Context receiver',
    value: 'Do update',
    setValue: () => {},
});

