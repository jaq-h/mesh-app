import React, { Component } from 'react';
import {  Icon } from 'semantic-ui-react'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      // hidden: true,
      // hover: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.toggleSearch = this.toggleSearch.bind(this);

    // this.handleMouseHover = this.handleMouseHover.bind(this);


  }

  

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(event.target.value);
  }

  handleSubmit(event) {
   event.preventDefault();
   if(/\S/.test(this.state.value)){
    this.props.search(this.state.value);
  }
  // this.toggleSearch();
 }
 // handleMouseHover(){
 //    this.setState(state => ({
 //      hover: !state.hover
 //
 //    }));
 //  }

  // handleMouseHover() {
  //   this.setState(this.toggleHoverState);
  // }
  //
  // toggleHoverState(state) {
  //   return {
  //     hover: !state.hover,
  //   };
  // }




  render() {
    console.log(this.props.showSearch);
    const show = !this.props.showSearch ? {display: 'none'} : {display: 'block'};
    return (
      <div>
        <form className="form" style={show} onSubmit={this.handleSubmit}>
          <input className="input"  type="text" value={this.state.value} placeHolder="Search YouTube..." onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default SearchBar;
