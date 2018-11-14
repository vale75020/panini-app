import React, { Component } from 'react';
import Player from './components/Player'
import './App.css'



class App extends Component {
  state = {
    playerTab : [
      {name:"Maradona", age:"25", nation:"Argentina", flag:"http://www.worldometers.info/img/flags/ar-flag.gif", photo:"https://nst.sky.it/content/dam/static/contentimages/original/sezioni_old/sport/maradona_story/maradona_esordi_argentina.jpg", id: 1},
      {name:"Cruyff", age:"23", nation:"Netherland", flag:"http://www.worldometers.info/img/flags/nl-flag.gif", photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvVY8ODQhgSr3apZLlYHS28MAhSWIzCXv60J7AyO4MmY1D4VcM", id: 2},
      {name:"Pelé", age:"28", nation:"Brasil", flag:"http://www.worldometers.info/img/flags/br-flag.gif", photo:"https://img.bfmtv.com/c/1256/708/992/d05d8e3971bb1c4a5a22edefb8f92.jpg", id: 3}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first Players App!</h1>
        <h2>Welcome!!!</h2>
        <div className="wrap">
        <Player playerTab={this.state.playerTab}/>
        </div>
      </div>
    );
  }
}

export default App;
