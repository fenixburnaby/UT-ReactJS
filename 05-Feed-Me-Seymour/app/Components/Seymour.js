var React = require("react");

var BurgerBtn = require("./Seymour/BurgerBtn");
var FriesBtn = require("./Seymour/FriesBtn");
var ShakeBtn = require("./Seymour/ShakeBtn");

var Seymour = React.createClass({

  getInitialState: function() {
    return {
      hunger: 0
    };
  },

  eatFood: function(food) {
    var newHungerCount = this.state.hunger + food;
    this.setState({ hunger: newHungerCount });
  },

  componentDidUpdate: function() {
    if (this.state.hunger >= 500) {
      alert('Thank you! Im full now (:');
    }
  },

  render: function() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title text-center">Seymour!</h3>
            </div>
            <div className="panel-body">
              <h1>Rawr I'm Seymour and I'm hungry!</h1>
              <h1>I will be full at 500 foods!</h1>
              <h1>Current foods = {this.state.hunger}</h1>
              <BurgerBtn hunger={this.state.hunger} eatFood={this.eatFood}/>
              <FriesBtn hunger={this.state.hunger} eatFood={this.eatFood}/>
              <ShakeBtn hunger={this.state.hunger} eatFood={this.eatFood}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Seymour;
