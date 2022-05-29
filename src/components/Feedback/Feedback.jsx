import Statistics from './Components/Statistics';
import FeedbackOptions from './Components/FeedbackOptions';
import Notification from './Components/Notification';
import Section from '../Section';
import { useState, useEffect } from 'react';
import './Feedback.module.scss';

// class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onButtonClick = type => {
//     this.setState(prevState => {
//       return { [type]: prevState[type] + 1 };
//     });
//     this.countTotalFeedback();
//   };

//   countTotalFeedback = () => {
//     const totalElements = Object.keys(this.state);

//     const sum = totalElements.reduce(
//       (acc, currentValue) => acc + this.state[currentValue],
//       0
//     );

//     return sum;
//   };
//   countPositiveFeedbackPercentage = () => {
//     const sum = Math.round((this.state.good / this.countTotalFeedback()) * 100);
//     return sum;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const options = ['good', 'bad', 'neutral'];
//
//   }
// }
const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);
  const options = [
    {
      name: 'good',
      value: good,
      setValue: setGood,
    },
    {
      name: 'neutral',
      value: neutral,
      setValue: setNeutral,
    },
    {
      name: 'bad',
      value: bad,
      setValue: setBad,
    },
  ];
  useEffect(() => {
    setTotal(good + bad + neutral);
  }, [good, neutral, bad]);
  useEffect(() => {
    setPositive(Math.round((good / total) * 100));
  }, [total, good]);
  return (
    <div>
      <Section title="Feedback section">
        <FeedbackOptions options={options} />
      </Section>

      <Section title="Statistics section">
        {good || neutral || bad ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positive}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
};

export default Feedback;
