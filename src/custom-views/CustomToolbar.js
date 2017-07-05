import React, { Component } from 'react';
import './CustomToolbar.css';

class CustomToolbar extends Component {
  navigate = (action) => {
    this.props.onNavigate(action)
  }
  render() {
    return (
    <div className="custom-header">
      <button type='button' onClick={this.navigate.bind(null, 'PREV')}>&lt;</button>
      {this.props.label}
      <button onClick={this.navigate.bind(null, 'NEXT')}>&gt;</button>
    </div>
    );
  }
}

export default CustomToolbar;