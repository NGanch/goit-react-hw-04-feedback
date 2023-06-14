import React from 'react';
import {handleColorType, ButtonList, Button} from './FeedbackOptions.styled';
//кнопки

export const FeedbackOptions = ({ options, onCountOptions }) => {

  return (

    <ButtonList>
    {options.map(option => (
    <Button
      type="button"
      className={handleColorType(option)}
      onClick={() => {
        onCountOptions(option);
      }}
    >
      {option}
    </Button>
  ))}
  </ButtonList>
  );
};

//==========================================

// import React from 'react';

// //кнопки
// import clsx from 'clsx';

// export const FeedbackOptions = ({ options, onCountOptions }) => {
//   return (
//     <div >
//       {options.map(option => (
//         <button
//           type="button"
//         //   className={clsx(css.btn, css[option])}
//           onClick={() => {
//             onCountOptions(option);
//           }}
//         >
//           {option}
//         </button>
//       ))}
//     </div>
//   );
// };