import React, { useState, useCallback } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    
    const [prev, forceRender] = useState(0);
    const numberOfTimesRendered=useRef(0);
    useEffect(() => {
        numberOfTimesRendered.current=numberOfTimesRendered.current+1;
      });
    
    const handleReRender = () => {
        // Update state to force re-render
        forceRender(prev+1);
        //forceRender(Math.random());
    };
    
    return (
        <div>
            <p>This component has rendered {numberOfTimesRendered.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};