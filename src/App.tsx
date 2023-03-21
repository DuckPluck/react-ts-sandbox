import React, {FC, useState} from 'react';
import './App.css';
// import {OpenWeatherAPI} from './components/OpenWeatherAPI.jsx';
import {Timer} from './components/Timer.jsx';
// import {Context} from '../context.ts';
// import {ContextParent} from './components/ContextReceiver';
import {ReducerReceiver} from './components/ReducerReceiver';
import {ButtonList} from './components/ButtonList.jsx';
import {RefTextClass, RefTextFunc} from './components/RefText';
import {WsControl} from './components/WsControl.jsx';


const App: FC = () => {
    // const [ctx, setCtx] = useState({
    //     isMemo: false,
    //     title: 'Context receiver',
    //     value: 'Do update',
    //     setValue: () => {
    //     },
    // });
    //
    // const value = {ctx, setCtx};

    return (
        <>
            <div className="container">

                <ButtonList />

                {/*<OpenWeatherAPI />*/}

                <Timer />

                {/*<Context.Provider value={value}>*/}
                {/*    <ContextParent />*/}
                {/*</Context.Provider>*/}

                <ReducerReceiver />

                <RefTextClass />
                <RefTextFunc />

                <WsControl />

            </div>
        </>
    );
}

export default App;

// TODO: refs
// TODO: drag drop
// TODO: routing
// TODO: потыкать аккаунты firebase