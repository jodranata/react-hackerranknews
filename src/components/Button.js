import React from 'react';
import PropTypes from 'prop-types';

export function Button({ type = 'button', onClick, className, inline }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} onClick={onClick} className={className}>
      {inline}
    </button>
  );
}

export function ButtonInline({ type = 'button', onClick, inline }) {
  return <Button type={type} onClick={onClick} className="button-inline" inline={inline} />;
}

Button.defaultProps = {
  onClick: undefined,
  className: '',
  inline: '',
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  inline: PropTypes.string,
};

ButtonInline.defaultProps = {
  onClick: undefined,
  inline: '',
};

ButtonInline.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  inline: PropTypes.string,
};
