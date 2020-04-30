import React from './node_modules/react';

const Rank = ({ name, entries }) => {
    return ( <
        div >
        <
        div className = 'white f2' > { `${name}, the number of photos you had entered is...` } <
        /div> <
        div className = 'white f1' > { entries } <
        /div> < /
        div >
    );
}

export default Rank;