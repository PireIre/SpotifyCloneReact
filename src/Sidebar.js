import React from 'react';

import './App.css';


function Sidebar(props){
    return (
        <article class ="sidebar">
            <img className="logo" src={require("./Images/Icons/Logo.png")} alt="logo"/>
            <div class="sidebar-functions">
                <ul>
                    <li><span><img class="sidebar-icon" src={require("./Images/Icons/Home.png")} alt="Home"/></span>Home</li>
                    <li><span><img class="sidebar-icon" src={require("./Images/Icons/Search.png")} alt="Search"/></span>Search</li>
                    <li><span><img class="sidebar-icon" src={require("./Images/Icons/Your-Library.png")} alt="logo"/></span>Your Library</li>
                </ul>
            </div>
            <div class="playlist-functions">
                <h3 class="sidebar-header">PLAYLISTS</h3>
                <ul>
                    <li><span><img className="sidebar-icon" src={require("./Images/Icons/Create-Playlist.png")}
                                   alt="Create-Playlist"/></span>Create Playlist</li>
                    <li><span><img className="sidebar-icon" src={require("./Images/Icons/Your-Library.png")}
                                   alt="Your-Library"/></span>Liked Songs</li>
                </ul>
            </div>
            <div class="album-list">
                <ul class ="album-list">
                    <li class="album-item">Gym Rock Music</li>
                    <li class="album-item">Born To Run 150 BMP</li>
                    <li class="album-item">This is The Killers</li>
                    <li class="album-item">2000-talets hits</li>
                </ul>
            </div>
        </article>
    )
}

export default Sidebar