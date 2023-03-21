import React, {FC} from 'react';
import './App.css';
import {OpenWeatherAPI} from './components/OpenWeatherAPI.jsx';
import {Timer} from './components/Timer.jsx';
import {MyContextProvider} from './contexts/context';
import {ContextParent} from './components/ContextReceiver';
import {ReducerReceiver} from './components/ReducerReceiver';
import {ButtonList} from './components/ButtonList.jsx';
import {RefTextClass, RefTextFunc} from './components/RefText';
import {WsControl} from './components/WsControl.jsx';


const App: FC = () => {
    return (
        <>
            <div className="container">

                <ButtonList />

                <OpenWeatherAPI />

                <Timer />

                <MyContextProvider >
                    <ContextParent />
                </MyContextProvider>

                <ReducerReceiver />

                <RefTextClass />
                <RefTextFunc />

                <WsControl />

            </div>
        </>
    );
}

export default App;

// TODO: drag drop
// TODO: routing
// TODO: потыкать аккаунты firebase