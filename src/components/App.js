import { Component } from 'react';
import Section from './UI/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export class App extends Component {
  state = { ...INITIAL_STATE };

  giveFeedbackHandler = e => {
    const { name } = e.target;
    this.setState(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const stateValues = Object.values(this.state);
    return stateValues.reduce((total, val) => total + val, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }

    const positive = this.state.good;
    return ((positive / total) * 100).toFixed(1);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage() + '%';

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.giveFeedbackHandler}
            // output={Output}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedback === 0 ? (
            <Notification message="There is no feedback." />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </>
    );
  }
}
