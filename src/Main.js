import React from 'react';
import Clock from './component/Clock';

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props){
    super(props)
    this.state = {color: green ,
                  isPrecise : false};
    this.changeColor = this.changeColor.bind(this);
    this.changePrecise = this.changePrecise.bind(this);
  }

  changePrecise(){
    this.setState({ isPrecise: !this.state.isPrecise})
  }

  changeColor() {
    const newColor = this.state.color === green ? yellow : green;
    this.setState({color: newColor});
  }

  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button className='btn-sm btn-primary' onClick={this.changeColor}>
          Change color
        </button>
        <button className='btn-sm btn-primary' onClick={this.changePrecise}>
          Toggle precise mode
        </button>
        <Clock isPrecise={this.state.isPrecise}/>
      </div>
    );
  }
}

export default Toggle
