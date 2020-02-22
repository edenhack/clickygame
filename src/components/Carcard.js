import React from "react";
import "../App.css";
import CardItem from "./CardItem.js";

function Card(props){
    return (
        <div className="gameApplet">
            <div className="Card">
                {props.cards.map(element => (
                    <CardItem
                        key={element.id}
                        carditem={element}
                        carditemclick={props.clickcount}
                    />
                ))}
            </div>
        </div>
    );
}

export default CardItem;