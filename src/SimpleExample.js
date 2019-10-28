import React from 'react';


export default () => (
    <ul>
        {[...Array(3000000).keys()].map(item =>(
            <li key={item}>Row {item}</li>

        ))}
    </ul>
)

