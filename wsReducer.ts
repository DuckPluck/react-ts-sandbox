export interface WsState {
    isReady: boolean;
    isLoading: boolean;
}

export interface WsAction {
    type: WsActionType;
}

export enum WsActionType {
    CONNECT = 'CONNECT',
    LOADING = 'LOADING',
    DISCONNECT = 'DISCONNECT',
}

export const wsInitState: WsState = {
    isReady: false,
    isLoading: false,
}

export function wsReducer(state: WsState, action: WsAction) {
    switch (action.type) {
        case WsActionType.CONNECT:
            console.log(`WebSocket connected!`);
            return {isReady: true, isLoading: false};

        case WsActionType.LOADING:
            console.log(`WebSocket loading!`);
            return {isReady: false, isLoading: true};

        case WsActionType.DISCONNECT:
            console.log(`WebSocket disconnected!`);
            return {isReady: false, isLoading: false};
    }
}