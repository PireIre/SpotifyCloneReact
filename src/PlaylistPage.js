import React from 'react';

import Card from './Card.js'
import AlbumHeader from "./AlbumHeader";
import Sidebar from "./Sidebar";
import Mp3Player from "./Mp3Player";



function PlaylistPage(){

    const information = require('./information.json');
    const cards = information.map((item) =>
        <Card key={item.id} title = {item.title} artist={item.artist} album = {item.album} length = {item.length} media={item.media}/>
    )

    return (
        <selection>
            <aside>
               <Sidebar/>
            </aside>
            <main>
                <div>
                    <AlbumHeader/>
                </div>
                <div class="Play-Menu">
                    <img className="Big-Green-Play-Button" src={require("./Images/Icons/Big-Green-Play-Button.png")} alt="Play-Button"/>
                </div>
                <div>
                    {cards}
                </div>
            </main>
            <footer>
                <Mp3Player/>
                {/*<audio autoPlay controls>
                    <source src={require("./Songs/Beautiful-Day.mp3")} type="audio/mp3"/>
                </audio>*/}
            </footer>
        </selection>

    )
}

export default PlaylistPage