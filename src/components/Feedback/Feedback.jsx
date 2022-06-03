import Statistics from './Components/Statistics';
import FeedbackOptions from './Components/FeedbackOptions';
import Notification from './Components/Notification';
import Section from '../Section';
import { useState } from 'react';
import './Feedback.module.scss';
import options from '../shared/options';

const Feedback = () => {
  const [score, setScore] = useState({ good: 0, bad: 0, neutral: 0 });

  const total = () => {
    const { good, neutral, bad } = score;
    return good + neutral + bad;
  };

  const positiveScore = () => {
    const { good } = score;
    return Math.round((good / total()) * 100);
  };

  return (
    <div>
      <Section title="Feedback section">
        <FeedbackOptions options={options(score, setScore)} />
      </Section>

      <Section title="Statistics section">
        {score.good || score.neutral || score.bad ? (
          <Statistics
            good={score.good}
            neutral={score.neutral}
            bad={score.bad}
            total={total()}
            positivePercentage={positiveScore()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
};

export default Feedback;
