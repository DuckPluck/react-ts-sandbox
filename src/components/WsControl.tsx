import React, {FC, useEffect, useReducer, useState} from 'react';
import {WsAction, WsActionType, wsInitState, wsReducer, WsState} from "../../wsReducer";

let socket: WebSocket | null = null;

export const WsControl: FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [state, dispatch] = useReducer<React.Reducer<WsState, WsAction>>(wsReducer, wsInitState)

    useEffect(() => {
        return () => {socket?.close()};
    })

    function handleSend() {
        if (state.isReady) {
            socket?.send(`test`);
        } else {
            console.error('Open WS connection before sending test message!');
        }
    }

    function handleClear() {
        setMessages([]);
    }

    function handleDisconnect() {
        socket?.close();
        dispatch({type: WsActionType.DISCONNECT});
    }

    function handleConnect() {
        dispatch({type: WsActionType.LOADING});

        socket = new WebSocket('wss://javascript.info/article/websocket/chat/ws');

        socket.onopen = function (e: Event) {
            console.log('WebSocket connected!', e);
            dispatch({type: WsActionType.CONNECT});
        };

        socket.onmessage = function (e: MessageEvent) {
            console.log(`Received WS message from server: ${e.data}`);
            setMessages(prevState => [...prevState, e.data])
        };

        socket.onclose = function (e: CloseEvent) {
            if (e.wasClean) {
                console.log(`WS connection was cleanly closed, code: ${e.code}`);
            } else {
                console.log(`WS connection was aborted`);
            }
        };

        socket.onerror = function (e: Event) {
            console.log(`Error type:`, e);
            dispatch({type: WsActionType.DISCONNECT});
        };
    }

    return (
        <div>
            <p>Websocket {state.isReady ? state.isLoading ? 'Loading...' : 'Connected' : 'Disconnected'}</p>
            <button onClick={handleConnect}>Connect</button>
            <button onClick={handleSend}>Send</button>
            <button onClick={handleClear}>Clear</button>
            <button onClick={handleDisconnect}>Disconnect</button>
            <p>{state.isReady ? 'Messages:' : ''}</p>
            <WsMessageList messages={messages} />
        </div>
    );
}

interface WsMessageListProps {
    messages: string[];
}

export const WsMessageList: FC<WsMessageListProps> = ({messages}) => {
    return (
        <>
            {messages.map((msg, i) => <p key={i} className={'border-box'}>{msg}</p>)}
        </>
    );
}