import React from 'react';
import ListHeader from './ListHeader';
import ListContainer from './ListContainer';

const List = ({title,color,id,email}) => {
    return (
        <div 
            className="card-list"
            style={{background: color}}
        >
            <ListHeader title={title}/>
            <ListContainer
                id={id}
                email={email}
            />
        </div>
    )
}

export default List;