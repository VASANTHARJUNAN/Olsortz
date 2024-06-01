import React from 'react';
import CountUp from 'react-countup';
export const CounterUpClient = () => {
    return (
        <>
            <span>
                <CountUp start={0} end={1500} duration={0.5} delay={0}/>
        </span>
        </>
    )
}
