import React from 'react';

import Card from './Card.js'
import AlbumHeader from "./AlbumHeader";
import Sidebar from "./Sidebar";
import Mp3Player from "./Mp3Player";
import AllTheSmallThings from "./Songs/All-The-Small-Things.mp3";
import BeautifulDay from "./Songs/Beautiful-Day.mp3";
import ChasingCars from "./Songs/Chasing-Cars.mp3";
import Clocks from "./Songs/Clocks.mp3"
import Crazy from "./Songs/Crazy.mp3";
import Dragonstea from "./Songs/Dragostea-Din-Tei.mp3"
import Human from "./Songs/Human.mp3"
import Lonely from "./Songs/Lonely.mp3"
import SpeedOfSound from "./Songs/Speed-Of-Sound.mp3"
import Mp3PlayerLeft from "./Mp3PlayerLeft";

function getTime(time) {
    if(!isNaN(time)) {
        return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    }
}

class PlaylistPage extends React.Component{
    state  = {
        selectedTack: null,
        player:"stopped"
    }

    componentDidMount() {
        this.player.addEventListener("timeupdate", e => {
            this.setState({
                currentTime: e.target.currentTime,
                duration: e.target.duration
            });
        });
    }

    componentWillUnmount() {
        this.player.removeEventListener("timeupdate", () => {});
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.selectedTrack !== prevState.selectedTrack) {
            let track;
            switch(this.state.selectedTrack) {
                case "All the small things":
                    track = AllTheSmallThings;
                    break;
                case "Beautiful Day":
                    track = BeautifulDay;
                    break;
                case "Chasing Cars":
                    track = ChasingCars;
                    break;
                case "Clocks":
                    track = Clocks;
                    break;
                case "Dragostea Din Tei":
                    track = Dragonstea;
                    break;
                case "Human":
                    track = Human;
                    break;
                case "Lonely":
                    track = Lonely;
                    break;
                case "Speed of Sound":
                    track = SpeedOfSound;
                    break;
                case "Crazy":
                    track = Crazy;
                    break;
                default:
                    break;
            }
            if(track) {
                this.player.src = track;
                this.player.play()
                this.setState({player: "playing"})
            }
        }
        if (this.state.player !== prevState.player) {
            if (this.state.player === "paused") {
                this.player.pause();
            } else if (this.state.player === "stopped") {
                this.player.pause();
                this.player.currentTime = 0;
                this.setState({ selectedTrack: null });
            } else if (
                this.state.player === "playing" &&
                prevState.player === "paused"
            ) {
                this.player.play();
            }
        }
    }


    render() {
        const information = require('./information.json');
        const cards = information.map((item) => {
            return (
                <Card key={item.id} title={item.title} artist={item.artist} album={item.album} length={item.length}
                      media={item.media}
                      onClick={() => this.setState({selectedTrack: item.title})}
                />
            );
        });

        const currentTime = getTime(this.state.currentTime)
        const duration = getTime(this.state.duration)

        return (
            <selection id="root">
                <aside>
                    <Sidebar/>
                </aside>
                <main>
                    <div>
                        <AlbumHeader/>
                    </div>
                    <div class="Play-Menu">
                        <img className="Big-Green-Play-Button" src={require("./Images/Icons/Big-Green-Play-Button.png")}
                             alt="Play-Button"/>
                    </div>
                    <div>
                        {cards}
                    </div>
                </main>
                <footer>
                    <article className="Mp3Player">
                       <Mp3PlayerLeft/>
                        <div className="Mp3Player-Content-Right">
                            <div>
                                {this.state.player === "paused" && (
                                    <button onClick={() => this.setState({ player: "playing" })}>
                                        Play
                                    </button>
                                )}
                                {this.state.player === "playing" && (
                                    <button onClick={() => this.setState({ player: "paused" })}>
                                        Pause
                                    </button>
                                )}
                                {this.state.player === "playing" || this.state.player === "paused" ? (
                                    <button onClick={() => this.setState({ player: "stopped" })}>
                                        Stop
                                    </button>
                                ) : (
                                    ""
                                )}
                            </div>
                            {this.state.player === "playing" || this.state.player === "paused" ? (
                                <div>
                                    {currentTime} / {duration}
                                </div>
                            ) : (
                                ""
                            )}
                            <audio ref={ref => this.player = ref} />
                        </div>
                    </article>
                </footer>
            </selection>

        )
    }}

    export default PlaylistPage
