var React = require("react");

var ShakeBtn = React.createClass({

  handleClick: function() {
    this.props.eatFood(30);
  },

  render: function() {
    return (
      <button className="btn btn-primary btn-lg" onClick={this.handleClick}>Drink Shake</button>
    )
  }
});

module.exports = ShakeBtn;
