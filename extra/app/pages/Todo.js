import React from 'react'

import { fetchTodos, postTodo } from '../utils/helpers'

import { Row, Col } from 'react-grid-system'

import TodoItem from '../components/TodoItem'

import { Card, CardTitle, CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


export default class Todo extends React.Component {

  constructor() {
    super()

    this.state = {
      todos: [],
      inputField: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleNewTodo = this.handleNewTodo.bind(this)
  }

  componentDidMount() {
    fetchTodos().then(function(todos){
      this.setState({todos: todos})
    }.bind(this))
  }

  handleChange(event) {
    var newState = {}
    newState[event.target.id] = event.target.value
    this.setState(newState)
  }

  handleNewTodo() {
    postTodo(this.state.inputField).then(function() {
      fetchTodos().then(function(todos){
        this.setState({todos: todos})
      })
    })
  }

  render() {
    return (
      <Row>
        <Col md={8} offset={{ md: 2 }}>
          <Card>
            <CardTitle
              title='Enter A Todo!'
            />
            <CardText>
              <TextField
                hintText='Get Milk'
                id='inputField'
                onChange={this.handleChange}
              />
              <RaisedButton
                label='Submit'
                primary={true}
                onClick={this.handleNewTodo}
              />
            </CardText>
          </Card>
        </Col>
        <ol>
         {this.state.todos.map((todo) => <TodoItem key={todo} todo={todo} />)}
        </ol>
      </Row>
    );
  }
}
