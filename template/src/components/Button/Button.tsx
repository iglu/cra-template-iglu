import './Button.scss'

import React from 'react'
import cn from 'classnames'
import Icon, { ICON } from '../Icon/Icon'
import { Size } from '../../common/semantics'

export interface ButtonProps {
  href?: string
  target?: string
  disabled?: boolean
  type?: 'button' | 'submit'
  label?: string
  iconRight?: ICON
  iconLeft?: ICON
  variant?: string
  size?: Size
  outlined?: boolean
  curved?: boolean
  rounded?: boolean
  tiled?: boolean
  fill?: boolean
  className?: string
  align?: 'left' | 'center' | 'right'
  onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({
  href,
  target,
  disabled,
  type = 'button',
  label,
  iconLeft,
  iconRight,
  variant,
  size,
  outlined,
  curved,
  rounded,
  tiled,
  fill,
  align,
  onClick,
}: ButtonProps) => {
  const ButtonTag = href ? 'a' : 'button'
  const anchorProps = href && target === '_blank' ? { rel: 'noopener noreferrer', target } : { target }

  return (
    <ButtonTag
      className={BEM()}
      onClick={onClick}
      disabled={disabled}
      type={type}
      data-testid="button-tag"
      {...anchorProps}
    >
      {!!iconLeft && <Icon className="btn__icon" name={iconLeft} />}
      {!!label && <span className="btn__label">{label}</span>}
      {!!iconRight && <Icon className="btn__icon" name={iconRight} />}
    </ButtonTag>
  )

  function BEM(): string {
    return cn('btn', `btn--${variant}`, `btn--${size}`, `btn--align-${align}`, {
      'btn--outlined': outlined,
      'btn--curved': curved,
      'btn--rounded': rounded,
      'btn--tiled': tiled,
      'btn--fill': fill,
    })
  }
}

export default Button
