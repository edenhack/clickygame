import React from "react";
import "../App.css";

function Header(props) {
    return (
        <div className="Header">
            <div>
                <a>Clicker Cars</a>
            </div>
            <div>{props.message}</div>
            <div>
                Score: {props.score} ||| Top Score: {props.topscore}
            </div>
        </div>
    );
}

export default Header;