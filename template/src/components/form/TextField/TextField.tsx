import React from 'react'
import { FieldProps } from 'formik'
import FieldControl from '../FieldControl/FieldControl'

import './TextField.scss'

const TextField: React.FC<FieldProps> = (props) => {
  return (
    <FieldControl {...props}>
      <input className="textfield" type="text" {...props.field} />
    </FieldControl>
  )
}

export default TextField
