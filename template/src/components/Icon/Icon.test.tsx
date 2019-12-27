import React from 'react'
import { render } from '@testing-library/react'
import Icon, { ICON } from './Icon'

const iconId = 'icon'

it('should output icon', () => {
  const { getByTestId } = render(<Icon name={ICON.ZOO} />)

  expect(getByTestId(iconId)).toBeTruthy()
})
