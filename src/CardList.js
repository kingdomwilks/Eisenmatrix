import React from 'react';
import Card from './Card';

const CardList = (props) => {
    return (
        <div>
            {props.cards.map((cardInfo, index) => 
            <Card
                key={index}
                cardInfo={cardInfo}
                index={index}
                handleDelete={props.handleDelete}
            />
            
            )}
        </div>
    )
}

export default CardList;