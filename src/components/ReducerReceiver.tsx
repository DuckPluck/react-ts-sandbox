import React, {FC, useReducer} from 'react';
import {reducer, initState, ActionKind} from '../../reducer';

export const ReducerReceiver: FC = () => {
    const [state, dispatch] = useReducer(reducer, initState); // <> надо добавить генерик

    return (
        <>
            <div>
                <p>Reducer state is: {state.value}</p>
                <button onClick={() => dispatch({type: ActionKind.INCREMENT})}>+ 1</button>
                <button onClick={() => dispatch({type: ActionKind.DECREMENT})}>- 1</button>
                <button onClick={() => dispatch({type: ActionKind.MULTIPLY})}>* 2</button>
                <button onClick={() => dispatch({type: ActionKind.DIVIDE})}>/ 2</button>
            </div>
            <hr />
        </>
    );
}