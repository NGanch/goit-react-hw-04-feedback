import React from 'react';
import { useState } from 'react';

import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification.jsx';
import { PageSection, Container } from './App.styled';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // const [ total, setTotal] = useState(0);
  // const [ PositiveFeedback, setPositiveFeedback] = useState(0);

  const countOptions = type => {
    switch (type) {
      case 'good':
        setGood(prevState => prevState + 1);
        // setTotal(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        // setTotal(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        // setTotal(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const total = good + neutral + bad;
  const positivePercentage = Math.round((good / total) * 100);

  return (
    <PageSection>
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onCountOptions={countOptions}
          />
        </Section>
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback!" />
        )}
      </Container>
    </PageSection>
  );
}

//===============================

