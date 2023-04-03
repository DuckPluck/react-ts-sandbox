export const initState = {
    value: 0,
}

export type ReducerState = {
    value: number;
}

export enum ReducerActionKind {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
    MULTIPLY = 'MULTIPLY',
    DIVIDE = 'DIVIDE',
}

export type ReducerAction = {
    type: ReducerActionKind;
}

export function reducer(state: ReducerState, action: ReducerAction) {
    switch (action.type) {

        case ReducerActionKind.INCREMENT:
            console.log(`Reducer: value is incremented by 1`);
            return {...state, value: state.value + 1};

        case ReducerActionKind.DECREMENT:
            console.log(`Reducer: value is decremented by 1`);
            return {...state, value: state.value - 1};

        case ReducerActionKind.MULTIPLY:
            console.log(`Reducer: value is multiplied by 2`);
            return {...state, value: state.value * 2};

        case ReducerActionKind.DIVIDE:
            console.log(`Reducer: value is divided by 2`);
            return {...state, value: state.value / 2};

        default:
            throw new Error('Reducer error')
    }
}

