import React from 'react';

const Card = (props) => {
    console.log(props.index)
    let cardId = props.index;
    console.log(cardId);
    return (
        <div className="card">
            {props.cardInfo} 
            <span className="trash-span">
                <button className="trash-button"
                    onClick={() => {props.handleDelete(cardId)}}
                >
                    <i className="trash-icon" class="trash alternate outline icon"></i>
                </button>
                
            </span>
        </div>
    )
}

export default Card;