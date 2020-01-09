import React from 'react'
import { storiesOf } from '@storybook/react'
import Button, { ButtonProps } from './Button'
import { ICON } from '../Icon/Icon'
import { Level, Size } from '../../types'

function renderButtonsList(btn: ButtonProps): JSX.Element {
  return (
    <ul className="list--unstyled list--inline">
      <li>
        <Button {...btn} variant={Level.PRIMARY} iconLeft={ICON.ZOO} label="Button label" />
      </li>
      <li>
        <Button {...btn} variant={Level.SECONDARY} iconLeft={ICON.ZOO} label="Button label" />
      </li>
      <li>
        <Button {...btn} variant={Level.SUCCESS} iconRight={ICON.ZOO} label="Button label" />
      </li>
      <li>
        <Button {...btn} variant={Level.DANGER} iconRight={ICON.ZOO} label="Button label" />
      </li>
    </ul>
  )
}

storiesOf('Button', module)
  .add('variants', () => (
    <>
      <p>
        <Button label="Button label" />
      </p>
      {renderButtonsList({})}
      {renderButtonsList({ outlined: true })}
      {renderButtonsList({ curved: true })}
      {renderButtonsList({ rounded: true })}
      {renderButtonsList({ rounded: true, size: Size.SM })}
      {renderButtonsList({ rounded: true, size: Size.LG })}
      <ul className="list--unstyled list--inline">
        <li>
          <Button size={Size.SM} curved={true} variant={Level.PRIMARY} iconRight={ICON.ZOO} />
        </li>
        <li>
          <Button rounded={true} outlined={true} variant={Level.SECONDARY} iconRight={ICON.ZOO} />
        </li>
        <li>
          <Button size={Size.LG} variant={Level.SUCCESS} iconLeft={ICON.ZOO} />
        </li>
        <li>
          <Button curved={true} variant={Level.DANGER} iconLeft={ICON.ZOO} />
        </li>
      </ul>
      <ul className="list--unstyled list--inline">
        <li>
          <Button size={Size.SM} tiled={true} variant={Level.PRIMARY} iconLeft={ICON.ZOO} label="Button label" />
        </li>
        <li>
          <Button tiled={true} outlined={true} variant={Level.SECONDARY} iconLeft={ICON.ZOO} label="Button label" />
        </li>
        <li>
          <Button
            size={Size.LG}
            tiled={true}
            curved={true}
            variant={Level.SUCCESS}
            iconRight={ICON.ZOO}
            label="Button label"
          />
        </li>
        <li>
          <Button
            tiled={true}
            curved={true}
            outlined={true}
            variant={Level.DANGER}
            iconRight={ICON.ZOO}
            label="Button label"
          />
        </li>
      </ul>

      <p>
        <Button align="left" fill={true} variant={Level.PRIMARY} iconLeft={ICON.ZOO} label="Button label" />
      </p>
      <p>
        <Button align="center" fill={true} variant={Level.SECONDARY} iconLeft={ICON.ZOO} label="Button label" />
      </p>
      <p>
        <Button align="right" fill={true} variant={Level.SUCCESS} iconRight={ICON.ZOO} label="Button label" />
      </p>
      <p>
        <Button fill={true} variant={Level.DANGER} iconRight={ICON.ZOO} label="Button label" />
      </p>
    </>
  ))
  .add('outlined', () => (
    <>
      <Button variant={Level.PRIMARY} iconLeft={ICON.ZOO} label="Button label" outlined={true} />
      <Button variant={Level.SECONDARY} iconRight={ICON.ZOO} label="Button label" outlined={true} />
      <Button variant={Level.SUCCESS} label="Button label" outlined={true} />
      <Button variant={Level.DANGER} label="Button label" outlined={true} />
    </>
  ))
