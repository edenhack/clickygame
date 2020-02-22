import React from "react";

const CardItem = props => {
    console.log(props);
    return (
        <div>
            <img
                src={props.carditem.img}
                id={props.carditem.id}
                alt={props.carditem.name}
                onClick= {event => {
                    event.preventDefault();
                    props.carditemclick(props.carditem.id);
                }}
            />
        </div>
    );
};

export default CardItem;