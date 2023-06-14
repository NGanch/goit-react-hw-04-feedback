import React from 'react';
import PropTypes from 'prop-types';
import {Statistic, GoodP,  NeutralP, BadP, TotalP, FeatbackP,  SpanGood, SpanNeutral, SpanBad, SpanTotal, SpanFeatback} from '../Statistics/Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Statistic>
      <GoodP>
        Good:
        <SpanGood>{good}</SpanGood>
      </GoodP>
      <NeutralP>
        Neutral:
        <SpanNeutral>{neutral}</SpanNeutral>
      </NeutralP>
      <BadP>
        Bad:
        <SpanBad>{bad}</SpanBad>
      </BadP>
      <TotalP>
        Total:
        <SpanTotal>{total}</SpanTotal>
      </TotalP>
      <FeatbackP>
        Positive feedback:
        <SpanFeatback>{positivePercentage} %</SpanFeatback>
      </FeatbackP>
    </Statistic>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
//==========================================
// import React from 'react';
// import PropTypes from 'prop-types';


// export const Statistics = ({
//   good,
//   neutral,
//   bad,
//   total,
//   positivePercentage,
// }) => {
//   return (
//     <div>
//       <p>
//         Good:
//         <span>{good}</span>
//       </p>
//       <p >
//         Neutral:
//         <span>{neutral}</span>
//       </p>
//       <p >
//         Bad:
//         <span >{bad}</span>
//       </p>
//       <p >
//         Total:
//         <span>{total}</span>
//       </p>
//       <p >
//         Positive feedback:
//         <span>{positivePercentage} %</span>
//       </p>
//     </div>
//   );
// };

// Statistics.propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
//   total: PropTypes.number.isRequired,
//   positivePercentage: PropTypes.number.isRequired,
// };