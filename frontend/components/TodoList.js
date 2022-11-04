import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.state.todos.map((element, idx)=>{
          if (this.props.state.hideComplete) {
            if (element[1] === false) {
              return(<Todo todo={element[0]} status={element[1]} check={this.props.check} index={idx} key={idx} />)
            }
          } else {
            return(<Todo todo={element[0]} status={element[1]} check={this.props.check} index={idx} key={idx} />)

          }
        })}
      </div>
    )
  }
}
