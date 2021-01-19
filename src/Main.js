import React from 'react';

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props){
    super(props)
    this.state = {color: green};
    this.changeColor = this.changeColor.bind(this);
  }
  
  changeColor() {
    const newColor = this.state.color == '#39D1B4' ? '#FFD712' : '#39D1B4';
    this.setState({color: newColor});
  }

  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button class='btn-sm btn-primary' onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}

export default Toggle