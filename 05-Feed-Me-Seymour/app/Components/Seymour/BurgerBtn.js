var React = require("react");

var BurgerBtn = React.createClass({

  handleClick: function() {
    this.props.eatFood(50);
  },

  render: function() {
    return (
      <button className="btn btn-primary btn-lg" onClick={this.handleClick}>Eat Burger</button>
    )
  }
});

module.exports = BurgerBtn;
