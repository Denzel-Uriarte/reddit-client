import PropTypes from 'prop-types';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export const Button = ({ dark, size, label, extra, ...props }) => {
  const color = dark ? 'btn-dark' : 'btn-light';
  const buttonSize = size==='tall' ? 2 : 12;
  return (
    <button
      type="button"
      className={['btn', `col-${buttonSize}` , color, extra].join(' ')}
      {...props}
    >
      {label}
    </button>
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
   * Optional click handler
   */
  onClick: PropTypes.any,
  /**
   * Optional additional classes
   */
  extra: PropTypes.string,
};

Button.defaultProps = {
  onClick: undefined,
};