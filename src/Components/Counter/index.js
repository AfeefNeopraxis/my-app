import React, { useState, useEffect } from 'react';

function Counter({ count, text }) {
    const [current, setCurrent] = useState(0); // state variable to store the current count
    const [limit, setLimit] = useState(count); // state variable to store the count prop
    const [increment, setIncrement] = useState(1); // state variable to store the increment factor

    useEffect(() => {
        // use effect hook to update the current count and the text visibility
        const interval = setInterval(() => {
            // set an interval to increment the current count by the increment factor every 100 ms
            setCurrent((prev) => prev + increment);
        }, 100);

        if (current >= limit) {
            // if the current count is equal to or greater than the count prop, clear the interval and stop the counter
            clearInterval(interval);
        }

        return () => {
            // clean up the interval when the component unmounts
            clearInterval(interval);
        };
    }, [current, limit, increment]); // run the effect whenever the current count, the count prop, or the increment factor changes

    useEffect(() => {
        // use effect hook to update the increment factor whenever the count prop changes
        setLimit(count); // update the limit state variable with the new count prop
        setIncrement(Math.round(count / 60) || 1); // update the increment state variable with the new increment factor
    }, [count]); // run the effect whenever the count prop changes

    return (
        <div className="counter">
            <h1>{current}+</h1> {/*  display the current count */}
            <p>{text}</p>
        </div>
    );
}

export default Counter;
