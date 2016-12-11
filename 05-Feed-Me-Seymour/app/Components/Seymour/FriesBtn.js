var React = require("react");

var FriesBtn = React.createClass({

  handleClick: function() {
    this.props.eatFood(20);
  },

  render: function() {
    return (
      <button className="btn btn-primary btn-lg" onClick={this.handleClick}>Eat Fries</button>
    )
  }
});

module.exports = FriesBtn;
