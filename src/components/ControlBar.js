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
        b.push( <Icon onClick={this.props.actions.shuffle} color='purple'name='random'/>)
      : b.push( <Icon onClick={this.props.actions.shuffle} color='purple'name='arrows alternate horizontal'/>)

      b.push( <Icon onClick={this.props.actions.prev}  color='purple' name='step backward'/> )

      this.props.player.paused ?
        b.push( <Icon onClick={this.props.actions.play} color='purple' name='play circle outline'/>)
      : b.push( <Icon onClick={this.props.actions.pause} color='purple' name='pause circle outline'/>)

      b.push( <Icon onClick={this.props.actions.skip} color='purple' name='step forward'/> )
      console.log(this.props.player.repeat_mode);
      switch(this.props.player.repeat_mode) {
        case 0:
            b.push( <Icon id="context" onClick={this.props.actions.loop.bind(this)} color='purple' name='long arrow alternate right'/>);
            break;
        case 1:
            b.push( <Icon id="track" onClick={this.props.actions.loop.bind(this)} color='purple' name='sync alternate'/>);
            break;
        case 2:
            b.push( <Icon id="off" onClick={this.props.actions.loop.bind(this)} color='purple' name='redo alternate'/>);
          break;
          default:
          console.log('error');
          break;

        }
    }
    else{

      b.push( <Icon onClick={this.props.actions.prev} color='purple' name='step backward'/> )
      b.push( <Icon onClick={this.props.actions.play} color='purple'name='play'/>)
      b.push( <Icon onClick={this.props.actions.pause} color='purple'name='pause'/>)
      b.push( <Icon onClick={this.props.actions.skip} color='purple' name='step forward'/> )

    }
    return b;
  }


  render(){
    const controlButtons = this.setButtons();
    return(
      <div  className="Control-Bar">
        <div className="buttons" >
        <Icon onClick={this.props.showSearch} color='purple' name={'youtube'}/>
        <a>|&nbsp;</a>
        <Icon onClick={this.toggleMusic} color='purple'name='spotify'/>

        {controlButtons}
        <Icon onClick={this.toggleDevices}color='purple' name={'headphones'}/>
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
