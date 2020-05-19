import React, { useState } from 'react';
import ReactDOM from 'react-dom'

const Session = () => {
    const [sessionLengthInSeconds, setSessionLengthInSeconds] = useState(300);

    const decrementSessionLengthByOneMinute = () => {
        const newSessionLengthInSeconds = sessionLengthInSeconds - 60;
        if (newSessionLengthInSeconds < 0) {
            setSessionLengthInSeconds(0);
        } else {
            setSessionLengthInSeconds(newSessionLengthInSeconds);
        }
    };
    const incrementSessionLengthByOneMinute = () => setSessionLengthInSeconds(sessionLengthInSeconds + 60);

    return (
        <div>
            <p id="session-label">Session</p>
            <p id="session-length">{sessionLengthInSeconds}</p>
            <button id="break-increment" onClick={incrementSessionLengthByOneMinute}>
                +
            </button>
            <button id="break-decrement" onClick={decrementSessionLengthByOneMinute}>
                -
            </button>
        </div>);
};

export default Session;