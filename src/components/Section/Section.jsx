import PropTypes from 'prop-types';
import { SectionTitle } from '../Section/Section.styled.jsx';

export const Section = ({ title, children }) => {
  return (
    <div>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </div>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
//==========================================
// import PropTypes from 'prop-types';


// export const Section = ({ title, children }) => {
//   return (
//     <div>
//       <h1>{title}</h1>
//       {children}
//     </div>
//   );
// };
// Section.propTypes = {
//   title: PropTypes.string.isRequired,
// };