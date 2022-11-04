import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.submit}>
          <input placeholder='Type todo' value={this.props.state.pending} onChange={this.props.handleInput}/>
          <button>Submit to-do</button>
        </form>
      <button onClick={this.props.hide}>Hide Completed</button>
      </div>
    )
  }
}
