import React, { Component } from 'react';

class ControlledInput extends Component {
  state = {
    value: ' '
  }

  handleChange = event => {
    console.log(this.state)
    this.setState({
      value: event.target.value
    });
  }
  
  render() {
    return (
      <div>
        <form onSubmit={ event => this.handleSubmit }>
          <input
            type="text"
            value={ this.state.value }
            onChange={ this.handleChange }
            />
        </form>
      </div>
    );
  }

}

export default ControlledInput;
