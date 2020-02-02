import React from 'react';
import List from './List';

const BoardContainer = ({email}) =>  {

    return (
        <div className="board-container">
            <List 
                title="Urgent and Important"
                color="linear-gradient(to right, #1d976c, #93f9b9)"
                id={0}
                email={email}
            />
            <List 
                title="Not Urgent and Important"
                color="linear-gradient(to right, #4776e6, #8e54e9)"
                id={1}
                email={email}
            />
            <List 
                title="Urgent and Not Important"
                color="linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%)"
                id={2}
                email={email}
            />
            <List 
                title="Not Urgent and Not Important"
                color="linear-gradient(to right, #bbd2c5, #536976)"
                id={3}
                email={email}
            />
        </div>
        );
    }

export default BoardContainer;
