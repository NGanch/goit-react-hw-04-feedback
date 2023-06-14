import React from 'react';
import {useState} from 'react';

import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification.jsx';
import { PageSection, Container } from './App.styled';


export function App()  {
  const [ good, setGood] = useState(0);
  const [ neutral, setNeutral] = useState(0);
  const [ bad, setBad] = useState(0);
  // const [ total, setTotal] = useState(0);
  // const [ PositiveFeedback, setPositiveFeedback] = useState(0);


  const countOptions = (type) => {
  switch(type) {
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


//=============================
//   import React from 'react';
// import { Section } from './Section/Section';
// import { Statistics } from './Statistics/Statistics';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { Notification } from './Notification/Notification.jsx';


// export class App extends React.Component {
//   static defaultProps = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   state = {
//     good: this.props.good,
//     neutral: this.props.neutral,
//     bad: this.props.bad,
//   };
//   countOptions = type => {
//     this.setState(prevState => ({
//       [type]: prevState[type] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good, neutral, bad } = this.state;
//     return Math.round((100 / (good + neutral + bad)) * good) || 0;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();
//     return (
//       <section>
//         <div >
//           <Section title="Please leave feedback">
//             <FeedbackOptions
//               options={['good', 'neutral', 'bad']}
//               onCountOptions={this.countOptions}
//             />
//           </Section>
//           {total > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           ) : (
//             <Notification message="There is no feedback!" />
//           )}
//         </div>
//       </section>
//     );
//   }
// }

