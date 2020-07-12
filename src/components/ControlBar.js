import React, { Component } from 'react';
import {  Icon } from 'semantic-ui-react'
import DeviceList from './DeviceList.js'
import MusicList from './MusicList.js'
class ControlBar extends Component {
  constructor(props){
    super(props);
    // console.log(props);
    this.state = {
      showDevices: false,
      showMusic: false,
      showSearch: false,
    };
    this.toggleDevices = this.toggleDevices.bind(this);
    this.toggleMusic = this.toggleMusic.bind(this);
  }

  toggleMusic(){
    this.setState(state => ({
      showMusic: !state.showMusic,
      showDevices: false
    }));
  }
  toggleDevices(){
    this.setState(state => ({
      showDevices: !state.showDevices,
      showMusic: false
    }));
  }

  setButtons(){
    console.log(this.props)
    let b = [];
    if(this.props.player)
    {
      this.props.player.shuffle ?
        b.push( <Icon onClick={this.props.actions.shuffle} color='grey'name='random'/>)
      : b.push( <Icon onClick={this.props.actions.shuffle} color='grey'name='arrows alternate horizontal'/>)

      b.push( <Icon onClick={this.props.actions.prev}  color='grey' name='step backward'/> )

      this.props.player.paused ?
        b.push( <Icon onClick={this.props.actions.play} color='grey' name='play circle outline'/>)
      : b.push( <Icon onClick={this.props.actions.pause} color='grey' name='pause circle outline'/>)

      b.push( <Icon onClick={this.props.actions.skip} color='grey' name='step forward'/> )
      console.log(this.props.player.repeat_mode);
      switch(this.props.player.repeat_mode) {
        case 0:
            b.push( <Icon id="context" onClick={this.props.actions.loop.bind(this)} color='grey' name='long arrow alternate right'/>);
            break;
        case 1:
            b.push( <Icon id="track" onClick={this.props.actions.loop.bind(this)} color='grey' name='sync alternate'/>);
            break;
        case 2:
            b.push( <Icon id="off" onClick={this.props.actions.loop.bind(this)} color='grey' name='redo alternate'/>);
          break;
          default:
          console.log('error');
          break;

        }
    }
    else{

      b.push( <Icon onClick={this.props.actions.prev} color='grey' name='step backward'/> )
      b.push( <Icon onClick={this.props.actions.play} color='grey'name='play'/>)
      b.push( <Icon onClick={this.props.actions.pause} color='grey'name='pause'/>)
      b.push( <Icon onClick={this.props.actions.skip} color='grey' name='step forward'/> )

    }
    return b;
  }


  render(){
    const controlButtons = this.setButtons();
    return(
      <div  className="Control-Bar">
        <div className="buttons" >
        <Icon onClick={this.props.showSearch} color='grey' name={'youtube'}/>
        <a>|&nbsp;</a>
        <Icon onClick={this.toggleMusic} color='grey'name='spotify'/>

        {controlButtons}
        <Icon onClick={this.toggleDevices}color='grey' name={'headphones'}/>
        </div>
        <DeviceList  show={this.state.showDevices} token={this.props.user.access_token} deviceClick={this.props.actions.device} />
        <MusicList  show={this.state.showMusic} user={this.props.user}  />

      </div>
    );
  }
}

export default ControlBar;

//  <MusicList show={this.state.showDevices} token={this.props.token} deviceClick={this.props.actions.device} />
// <Slider min={0} max={1} onChange={this.props.actions.setVolume.bind(this)}/>
