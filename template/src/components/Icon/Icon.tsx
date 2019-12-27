import './Icon.scss'

import React from 'react'
import cn from 'classnames'

import { ReactComponent as Zoo } from './Icons/zoo.svg'

export const ICON = {
  ZOO: Zoo,
}

export type ICON = EnumLiteralsOf<typeof ICON>
export interface IconProps {
  name: ICON
  className?: string
}

const Icon: React.FC<IconProps> = ({ name, className }: IconProps) => {
  const IconRender = name

  return <IconRender data-testid="icon" className={BEM()} />

  function BEM(): string {
    return cn('icon', className)
  }
}

export default Icon
