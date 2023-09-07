import React, { useEffect, useState } from 'react';

export const State = () => {
    const [state, setState] = useState({
        count: 0,
        isCounting: false,
    });

    const handleCount = () => {
        setState({ ...state, count: state.count + 3 });
    };
    const handleStatus = () => {
        setState({ ...state, isCounting: !state.isCounting });
    };

    useEffect(() => {
        console.log('state ', state);
    }, [state]);

    return (
        <div>
            <button onClick={handleCount}>click!</button>
            <button onClick={handleStatus}>What is status?</button>
        </div>
    );
};
