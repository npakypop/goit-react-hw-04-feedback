import React, { Component } from 'react';
import { Section } from './Section';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    // почему не работает если передать в рендере при вызове ф-ии зис.стейт и тут в параметрах его дестрктирозовать
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return (good * 100) / (good + neutral + bad);
  };

  handelBtn = event => {
    this.countTotalFeedback();
    const btnName = event.target.name;
    this.setState(
      prevState => ({ [btnName]: prevState[btnName] + 1 }) //зачем тут надо оборачивать функцию в круглые дужки если не использую return?????
      // return {[btnName]: prevState[btnName] + 1,};
    );
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feadack">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handelBtn}
          />
        </Section>
        {total > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positive}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
        {/* <h1>Please leave feadack</h1>
            <ul>
            <li>
                <button type="button" name="good" onClick={this.handelBtn}>
                Good
                </button>
            </li>
            <li>
                <button type="button" name="neutral" onClick={this.handelBtn}>
                Neutral
                </button>
            </li>
            <li>
                <button type="button" name="bad" onClick={this.handelBtn}>
                Bad
                </button>
            </li>
            </ul> */}
        {/* <h2>Statistics</h2>
                <p>Good: <span>{ good }</span></p>
                <p>Neutral: <span>{ neutral }</span></p>
                <p>Bad: <span>{ bad }</span></p>
                <p>Total: <span>{total}</span></p>
                <p>Positive feedback: <span>{positive}%</span></p>        */}
      </>
    );
  }
}
