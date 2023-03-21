export const initState = {
    value: 0,
}

type State = {
    value: number;
}

export enum ActionKind {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
    MULTIPLY = 'MULTIPLY',
    DIVIDE = 'DIVIDE',
}

type Action = {
    type: ActionKind;
}

export function reducer(state: State, action: Action) {
    switch (action.type) {

        case ActionKind.INCREMENT:
            console.log(`Reducer: value is incremented by 1`);
            return {...state, value: state.value + 1};

        case ActionKind.DECREMENT:
            console.log(`Reducer: value is decremented by 1`);
            return {...state, value: state.value - 1};

        case ActionKind.MULTIPLY:
            console.log(`Reducer: value is multiplied by 2`);
            return {...state, value: state.value * 2};

        case ActionKind.DIVIDE:
            console.log(`Reducer: value is divided by 2`);
            return {...state, value: state.value / 2};

        default: throw new Error('Reducer error')
    }
}

