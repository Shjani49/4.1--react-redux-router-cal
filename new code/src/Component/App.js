import React from 'react';
import '../App.css';
import { addResult } from '../actions/Cal';
import { connect } from 'react-redux';




class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: "",
      num2: "",
      result: "",
      value: "+"

    };
  }

  handlenum1 = (event) => {
    this.setState({
      num1: event.target.value
    })
  }


  handlenum2 = (event) => {

    this.setState({
      num2: event.target.value
    })
  }

  ChangeState = (event) => {

    this.setState({ value: event.target.value });

  }

  addResult = (event) => {
    event.preventDefault();
    // create a temporary variable so we can setState & dispatch the result
    // in one cycle
    let tempResult;
    switch (this.state.value) {
      case "+":
        tempResult = parseInt(this.state.num1) + parseInt(this.state.num2);
        this.setState({
          result: tempResult,
        });
        
        break;
      case "-":
        tempResult = parseInt(this.state.num1) - parseInt(this.state.num2);
        this.setState({
          result: tempResult,
        });
        break;
      case "*":
        tempResult = parseInt(this.state.num1) * parseInt(this.state.num2);
        this.setState({
          result: tempResult,
        });
        break;
      case "/":
        tempResult = parseInt(this.state.num1) / parseInt(this.state.num2);
        this.setState({
          result: tempResult,
        });
        break;
      default:
        this.setState({
          result: " Please select Operation",
        });
        break;
    }
    this.props.dispatch(addResult(`${this.state.num1} ${this.state.value} ${this.state.num2} = ${tempResult}`));
  }

  
  
  render()
  {
    return (
    
        <div className = "Container">
        <h1>Welcome to my Calculator App!</h1>
        <form onSubmit={this.addResult}>
          <label htmlFor="num1">
            Input 1:<br />
            <input
              type="number"
              name="num1"
              id="num1"
              required
              value={this.state.num1}
              onChange={this.handlenum1} />

          </label>
          <br /><br />
          <label htmlFor="operation">
            Operation: <br />
            <select id="calc" value={this.state.value} onChange={this.ChangeState} >
              <option value="+"> + </option>
              <option value="-"> - </option>
              <option value="*"> * </option>
              <option value="/"> / </option>
            </select>
          </label>
          <br /><br />
          <label htmlFor="num2">
            Input 2:<br />
            <input
              type="number"
              name="num2"
              id="num2"
              required
              value={this.state.num2}
              onChange={this.handlenum2} />
          </label>
          <br /><br />
          <input type="submit" value="Calculate!" id = "button"/>
          <br />
          <p>Result: {this.state.result}</p>
        </form>   
         
        </div>

    );
  }

  
}

export default connect(
  null
)(App); 