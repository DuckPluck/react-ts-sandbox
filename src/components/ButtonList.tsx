import React, {FC, useState} from 'react';
import {ButtonCounterClass, ButtonCounterFunc} from './ButtonCounter';


export const ButtonList:FC = () => {
    const [buttons, setButtons] = useState<string[]>(['func', 'class']);
    return (
        <>
            <div className="counter-container">
                {
                    buttons.map((btn, i) => btn === 'func'
                        ? <ButtonCounterFunc key={i} setButtons={setButtons} />
                        : <ButtonCounterClass key={i} setButtons={setButtons} />
                    )
                }

            </div>
            <hr />
        </>
    );
}

