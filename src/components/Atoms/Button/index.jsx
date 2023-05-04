import React from 'react'
import PropTypes from 'prop-types'
import styles from './_.module.scss'

function Button ({
  children,
  isSmall,
  onClick,
  theme,
  className,
  isActive,
  ...anotherprops
}) {
  const themes = {
    primary: '#7edbe9',
    secondary: 'darkgray',
    light: 'white',
    warning: '#e3a64f',
    danger: '#e34f4f'
  }
  const color = themes[theme]
  const buttonSize = isSmall ? 'text-base font-medium p-3 px-4' : 'text-lg font-medium p-3 px-5'

  return <div className={`${styles['button-container' + (isActive ? '--active' : '')]}`} onClick={onClick} data-testid="button">
    <button
      className={`${styles[`button${isSmall ? '--small' : ''}`]} ${buttonSize} ${className}`}
      {...anotherprops}
      style={{ '--bezel-color': color }}>
        <span>{ children || 'No hay contenido en el botón' }</span>
    </button>
    <div
      className={`${styles['button--border']} ${buttonSize}`}
      style={{ '--bezel-color': color }}>{ children }
    </div>
  </div>
}

Button.defaultProps = {
  onClick: () => {},
  theme: 'primary',
  isActive: false,
  className: '',
  isSmall: false
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  theme: PropTypes.string,
  isActive: PropTypes.bool,
  anotherprops: PropTypes.object,
  className: PropTypes.string,
  isSmall: PropTypes.bool
}

export default Button
