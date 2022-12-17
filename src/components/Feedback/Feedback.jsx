import React, {Component} from "react";

export class Feedback extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    }
    
    handelBtn = (event) => {
        const btnName = event.target.name;
        this.setState((prevState) => {
            return {
                [btnName]: prevState[btnName] + 1,
            };
        });
    };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <h1>Please leave feadack</h1>
        <ul>
            <li>
                <button type="button" name="good" onClick={this.handelBtn}>Good</button>
            </li>
            <li>
                <button type="button" name="neutral" onClick={this.handelBtn}>Neutral</button>
            </li>
            <li>
                <button type="button" name="bad" onClick={this.handelBtn}>Bad</button>
            </li>
        </ul>

        <h2>Statistics</h2>
        <p>Good: <span>{ good }</span></p>
        <p>Neutral: <span>{ neutral }</span></p>
        <p>Bad: <span>{ bad }</span></p>
      </>
    )
  }
}