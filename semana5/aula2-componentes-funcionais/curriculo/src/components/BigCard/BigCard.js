import React from 'react';
import './BigCard.css';

function BigCard(props) {
    return (
        <div className="BigCard">
            <img alt="avatar" src="https://picsum.photos/id/947/80/80"></img>
            <div className="big-card-content">
                <b> {props.nome} </b>
                <div className="description">
                    {props.texto}
                </div>
            </div>
        </div>
    )
}

export default BigCard;