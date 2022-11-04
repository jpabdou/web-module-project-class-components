import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div>
        <p onClick={()=>this.props.check(this.props.index)}>{this.props.todo} {this.props.status===true ? "X" : null}</p> 
      </div>
    )
  }
}
