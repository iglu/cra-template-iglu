import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Button from './Button'

const buttonText = 'Click'
const buttonId = 'button-tag'

it('should output button with text', () => {
  const { getByText } = render(<Button label={buttonText} />)

  expect(getByText(buttonText)).toBeTruthy()
})

it('Should have type=button by default', () => {
  const { getByTestId } = render(<Button />)

  expect(getByTestId(buttonId)).toHaveProperty('type', 'button')
})

it('Should have the type if passed on', () => {
  const { getByTestId } = render(<Button type="submit" />)

  expect(getByTestId(buttonId)).toHaveProperty('type', 'submit')
})

it('Should output an anchor if called with a href', () => {
  const { container } = render(<Button type="submit" href="/url" />)

  expect(container.getElementsByTagName('a').length).toEqual(1)
  expect(container.getElementsByTagName('button').length).toEqual(0)
})

it('Should trigger event when clicked', () => {
  const onClick = jest.fn()
  const { getByTestId } = render(<Button onClick={() => onClick()} />)

  fireEvent.click(getByTestId(buttonId))
  expect(onClick).toHaveBeenCalled()
})

it('Should not trigger event when disabled', () => {
  const onClick = jest.fn()

  const { getByTestId } = render(<Button disabled={true} onClick={onClick} />)

  fireEvent.click(getByTestId(buttonId))
  expect(onClick).toBeCalledTimes(0)
})
