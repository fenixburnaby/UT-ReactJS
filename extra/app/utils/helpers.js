import axios from 'axios'

var helpers = {

  fetchTodos: function() {
    var queryURL = "/todos"

    return axios.get(queryURL).then(function(response) {
      return response
    })
  },

  postTodo: function(todo) {
    var queryURL = "/todos"

    return axios.post(queryURL, {todo: todo}).then(function(response) {
      return response
    })
  }
}

module.exports = helpers
