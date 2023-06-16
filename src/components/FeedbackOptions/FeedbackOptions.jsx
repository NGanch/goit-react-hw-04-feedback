import React from 'react';
import { handleColorType, ButtonList, Button } from './FeedbackOptions.styled';
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
