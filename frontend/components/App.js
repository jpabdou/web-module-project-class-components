import React from 'react'
import Form from './Form'
import TodoList from './TodoList'

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      todos: [],
      hideComplete: false,
      pending: ""

    }
  }

  hideCompleted=()=>{
    {this.state.hideComplete ? this.setState({hideComplete: false}) : this.setState({hideComplete: true})}
  }

  checkTodo=(idx)=>{
    console.log(this.state)
    if (this.state.todos[idx][1]) {
      this.state.todos[idx][1] = false
    } else {
      this.state.todos[idx][1] =true
    }
    
    this.setState({todos: [...this.state.todos]})
  }

  submitForm=(event)=>{
    event.preventDefault()
    this.setState({todos: this.state.todos.concat([[this.state.pending, false]])})
    this.setState({pending: ""})

  }

  handleInput =(event)=>{
    this.setState({pending: event.target.value})

  }
  render() {
    return (
      <div>
        <h1>Todos:</h1>
        <TodoList state={this.state} check={this.checkTodo} />
        <Form handleInput={this.handleInput} submit={this.submitForm} state={this.state} hide={this.hideCompleted}/>
      </div>
    )
  }
}
