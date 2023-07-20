import React from 'react';

function Objects() {
    const ernest = {
        name: 'Ernest',
        age: 22,
        email: 'ernestbracy1@gmail.com'
    };

    return Object.keys(ernest).map((key, index) => {
        return (
            <h2 key={index}>
                {key}: {ernest[key]}
            </h2>
        );
    });
}

export default Objects;
