import React from 'react';

import './App.css';

function Mp3PlayerLeft(props){


    return (
        <div className="Mp3Player-Content-Left">
            <div className="Mp3Player-Content-Left-Left">
                <p>IMAGE</p>
            </div>
            <div className="Mp3Player-Content-Left-Right">
                <p className="Mp3Player-Item-Left-Right">TITLE </p>
                <p className="Mp3Player-Item-Left-Right">Artist</p>
            </div>
        </div>
    )
}


export default Mp3PlayerLeft
