import React from 'react';

import './App.css';

function Card(props){


    return (
        <article onClick={props.onClick} class = "SongCard">
                <div class ="SongCard-Icon-Left">
                    <img className="Music-Note-Icon" src={require("./Images/Icons/Music-Note.png")} alt="Music-Note"/>
                    <img className="Play-Button-Icon" src={require("./Images/Icons/Play-Button.png")} alt="Music-Note"/>
                </div>
                <div class ="SongCard-Content-Left">
                        <h1 className="card-left-item">{props.title}</h1>
                        <p className="card-left-item">{props.artist}  • {props.album}</p>
                </div>
                <div class="SongCard-Content-Right">
                    <p className="card-right-item">{props.length}</p>
                </div>
        </article>
    )
}


export default Card
