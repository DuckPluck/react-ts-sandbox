import React, {FC, useState} from 'react';

let socket: WebSocket | null = null;

export const WsControl: FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [isConnected, setIsConnected] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    function handleSend() {
        if (isConnected) {
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
        setIsConnected(false);
    }

    function handleConnect() {
        setIsLoading(true);

        socket = new WebSocket('wss://javascript.info/article/websocket/chat/ws');

        socket.onopen = function (e: Event) {
            console.log('WebSocket connected!');
            setIsLoading(false);
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
            console.log(`Error type: ${e.type}`);
        };

        setIsConnected(true);
    }

    return (
        <div>
            <p>Websocket {isConnected ? isLoading ? 'Loading...' : 'Connected' : 'Disconnected'}</p>
            <button onClick={handleConnect}>Connect</button>
            <button onClick={handleSend}>Send</button>
            <button onClick={handleClear}>Clear</button>
            <button onClick={handleDisconnect}>Disconnect</button>
            <p>{isConnected ? 'Messages:' : ''}</p>
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