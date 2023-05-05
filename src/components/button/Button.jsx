import PropTypes from 'prop-types';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';


export const Button = ({ dark, size, label, extra, redirect, ...props }) => {
  const color = dark ? 'btn-dark' : 'btn-light';
  const buttonSize = size==='tall' ? 2 : 12;
  return (
    <NavLink to={`/${redirect}`} className={`col-${buttonSize}`}>
      <button
      type="button"
      className={['btn', `col-12` , color, extra].join(' ')}
      {...props}
      >
        
      {label}
      </button>
    </NavLink>
  );
};


/**
 * Primary UI component for user interaction
 */
Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  dark: PropTypes.bool,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['tall', 'wide']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Link to redirect to
   */
  redirect: PropTypes.string.isRequired,
  /**
   * Optional additional classes
   */
  extra: PropTypes.string,
};

Button.defaultProps = {
};