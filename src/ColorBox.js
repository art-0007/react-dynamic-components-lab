import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    let newOpacity = < ColorBox opacity ={this.props.opacity - 0.1}/>

    return this.props.opacity <= 0.2 ? null : (
      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
        {/* your conditional code here! */newOpacity}
      </div>
    )
  }

}

