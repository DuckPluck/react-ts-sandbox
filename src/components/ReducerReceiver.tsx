import React, {FC, useReducer} from 'react';
import {reducer, initState, ReducerActionKind, ReducerState, ReducerAction} from '../../reducer';

export const ReducerReceiver: FC = () => {
    const [state, dispatch] = useReducer<React.Reducer<ReducerState, ReducerAction>>(reducer, initState);

    return (
        <>
            <div>
                <p>Reducer state is: {state.value}</p>
                <button onClick={() => dispatch({type: ReducerActionKind.INCREMENT})}>+ 1</button>
                <button onClick={() => dispatch({type: ReducerActionKind.DECREMENT})}>- 1</button>
                <button onClick={() => dispatch({type: ReducerActionKind.MULTIPLY})}>* 2</button>
                <button onClick={() => dispatch({type: ReducerActionKind.DIVIDE})}>/ 2</button>
            </div>
            <hr />
        </>
    );
}