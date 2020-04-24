import React from 'react';

import './App.css';


function AlbumHeader(props){
    return (
        <article class="AlbumHeader">
            <div class="AlbumHeader-Content-Left">
                <img className="AlbumHeader-Image" src={require("./Images/Icons/Album-Header.png")} alt="Home"/>
            </div>
            <div class="AlbumHeader-Content-Right">
                <p class="AlbumHeader-Right-Content-Item">PLAYLIST</p>
                <h1 class="AlbumHeader-Right-Content-Item">Ire's Playlist</h1>
                <h5 class="AlbumHeader-Right-Content-Item">IrePire •9 Songs</h5>
            </div>
        </article>

    )
}

export default AlbumHeader