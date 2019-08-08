import React, { useState, useEffect } from 'react';

const Display = ({strikes, balls}) => {

    return (
        <div className = 'scoreboard'>
            <h2>Balls: {balls}</h2>
            <h2>Strikes: {strikes}</h2>
        </div>
    )
}

export default Display;