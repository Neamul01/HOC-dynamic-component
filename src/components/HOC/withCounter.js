import React, { useState } from 'react';

const withCounter = (OriginalComponent) => {
    const NewComponent = () => {
        const [count, setCount] = useState(0);

        const incrementCount = () => {
            setCount(count + 1);
        };

        return (
            <>
                <h2>this is child</h2>
                <OriginalComponent count={count} incrementCount={incrementCount} />
                <p>and the child below</p>
            </>
        );
    };

    return NewComponent;
};

export default withCounter;
