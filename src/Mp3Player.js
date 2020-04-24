import React from 'react';

import './App.css';


function Mp3Player(props){
    return (
        <article class = "Mp3Player">
           <div class="Mp3Player-Content-Left">
               <div class="Mp3Player-Content-Left-Left">
                   <p>IMAGE</p>
               </div>
               <div class="Mp3Player-Content-Left-Right">
                   <p class="Mp3Player-Item-Left-Right"> TITLE </p>
                   <p class="Mp3Player-Item-Left-Right"> artist</p>
               </div>
           </div>
            <div class="Mp3Player-Content-Right">

            </div>
        </article>
    )
}

export default Mp3Player;