import React, {useContext, useEffect, memo, FC} from 'react';
import {MyContext} from '../contexts/context';

export const ContextParent: FC = () => {
    const {isMemo, setIsMemo} = useContext(MyContext);

    useEffect(() => console.log('Context Parent rendered'));

    function memoHandler() {
        setIsMemo(true)
    }

    return (
        <>
            <div className='border-box'>
            <p>Context Parent</p>
    {isMemo ? <ContextBrokerMemo/> : <ContextBroker/>}
    <p>Now we can disallow rerender for Context broker:</p>
    <button onClick={memoHandler}>memo is {isMemo ? 'on' : 'off'}</button>

    </div>
    <hr />
    </>
);
}


export const ContextBroker: FC = () => {
    useEffect(() => console.log('Context Broker rendered (!)'));
    return (
        <div className='border-box second'>
            <p>Context broker</p>
    <ContextReceiver/>
    </div>
)
}
export const ContextBrokerMemo = memo(ContextBroker);


export const ContextReceiver: FC = () => {
    const {value, setValue} = useContext(MyContext);
    const {title} = useContext(MyContext);

    useEffect(() => console.log('Context Receiver rendered'));

    useEffect(() => {
        if (value !== 'Do update') {
            console.log(`New context value is: ${value}`);
        }
    }, [value]);

    function updateHandler() {
        setValue(Math.random());
    }


    return (
        <>
            <div className='border-box third'>
            <p>{title}</p>
            <p>Context random value: {value}</p>
    <button onClick={updateHandler}>Update</button>
        </div>
        </>
);
}