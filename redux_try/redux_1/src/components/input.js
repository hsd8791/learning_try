import React, { Component } from 'react';
import '../css/text.css'
export default class Input extends Component{
  constructor(props) {
    super(props);
  
    this.state = {
      value:props.value
    };
  }
  // onChange(e){
  //   console.log('e',e.nativeEvent)
  // }
  componentWillReceiveProps(props){
    // if(props.value !== this.props.value){
    //   this.setState({value:props.value})
    // }
  }
  handleChange(e){
    // console.log('e',e.target)
    // console.log('e',e.target.value)
    const { onChange } = this.props;
    let val = e.target.value
    this.setState({value:val})
    onChange && onChange(val)
  }
  render(){
    return(
      <div className='input-box'>
        <input 
          type="text"
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          // onChange={this.onChange.bind(this)}
        />
        <p>111</p>
      </div>
      )
  }
}