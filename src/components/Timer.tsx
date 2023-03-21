import React, {useEffect, useState} from 'react';

export const Timer = () => {
    const [time, setTime] = useState<string>('00:50');
    const [isStarted, setIsStarted] = useState<boolean>(false);

    function handleStatus() {
        console.log(`time: ${time}   isStarted: ${isStarted}`);
    }

    function handleKey() {
        if (isStarted) {
            setIsStarted(false);
        } else {
            setIsStarted(true);
        }
    }

    useEffect(() => {
        let timeout: number | undefined = undefined;

        if (isStarted) {
            console.log(`time remaining: ${time}`);
            timeout = setTimeout(() => {
                if (time === '00:00') {
                    clearTimeout(timeout);
                    setIsStarted(false);
                    console.log('Beep-beep... time is over')
                } else {
                    let [minutes, seconds]: string[] | number[] = time.split(':');

                    if (seconds === '00') {
                        minutes = +minutes - 1;
                        seconds = 59;
                    } else {
                        seconds = +seconds - 1;
                    }

                    setTime(`${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`);
                }
            }, 1000);
        }
        return () => clearTimeout(timeout);
    }, [time, isStarted])

    return (
        <>
            <div className="timer-container">
                <p>{time}</p>
                <input
                    type="time"
                    onChange={e => setTime(e.target.value)}
                    value={time}
                    id="timer"
                />
                <button onClick={handleKey}>{isStarted ? 'Stop timer' : 'Start timer'}</button>
                <button onClick={handleStatus}>Status</button>
            </div>
            <hr />
        </>
    );
}