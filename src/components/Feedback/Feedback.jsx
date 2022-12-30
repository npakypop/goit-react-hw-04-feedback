import React, { useState } from 'react';
import { Section } from '../Section/Section';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Notification } from '../Notification/Notification';
import css from './Feedback.module.css';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handelBtn = event => {
    const { name } = event.target;

    if (name === 'good') {
      setGood(prevState => prevState + 1);
      console.log(name);
    } else if (name === 'neutral') {
      setNeutral(prevState => prevState + 1);
    } else if (name === 'bad') {
      setBad(prevState => prevState + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / (good + neutral + bad));
  };

  const total = countTotalFeedback();
  const positive = countPositiveFeedbackPercentage();

  return (
    <div className={css.feedback}>
      <Section title="Please leave feadack">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handelBtn}
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
    </div>
  );
};
// export class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     // почему не работает если передать в рендере при вызове ф-ии зис.стейт и тут в параметрах его дестрктирозовать
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good, neutral, bad } = this.state;
//     return Math.round((good * 100) / (good + neutral + bad));
//   };

//   handelBtn = event => {
//     const btnName = event.target.name;
//     this.setState(
//       prevState => ({ [btnName]: prevState[btnName] + 1 }) //возвращаем объект поєтому оборачиваем в круглые скобки
//       // return {[btnName]: prevState[btnName] + 1,};
//     );
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positive = this.countPositiveFeedbackPercentage();

//     return (
//       <div className={css.feedback}>
//         <Section title="Please leave feadack">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.handelBtn}
//           />
//         </Section>
//         {total > 0 ? (
//           <Section title="Statistics">
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positive}
//             />
//           </Section>
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </div>
//     );
//   }
// }
