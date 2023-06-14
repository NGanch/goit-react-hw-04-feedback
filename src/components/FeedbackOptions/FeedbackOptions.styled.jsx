import styled from "@emotion/styled";
export const ButtonList = styled.div`
display: flex;
gap: 20px;
align-items: center;
justify-content: center;
`;

export const handleColorType = color => {
    switch (color) {
      case "good":
        return "rgb(61, 144, 96)";
      case "neutral":
        return "rgb(220, 192, 9)";
        case "bad":
            return "rgb(225, 105, 14)";
      default:
        return;
    }
  };

 export const Button = styled.button`
 padding: 10px 25px;
 border: none;
 background-color: rgb(214, 41, 119);
 color: rgb(235, 226, 226);
 border-radius: 5px;
 font-size: 17px;
 font-weight: bold;

 &:hover {
    background-color: ${({ color }) => handleColorType(color)};
 }
 `;


      
//   .good:hover {
//     background-color: rgb(61, 144, 96);
//   }
  
//   .neutral:hover {
//     background-color: rgb(220, 192, 9);
//   }
  
//   .bad:hover {
//     background-color: rgb(225, 105, 14);
//   }
  

  