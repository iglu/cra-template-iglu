import React from 'react'
import { FieldProps } from 'formik'

import './FieldControl.scss'

const FieldControl: React.FC<FieldProps> = ({ field, form, children }) => {
  return (
    <label className="field-control">
      {children}
      {form.touched[field.name] && form.errors[field.name] && (
        <div className="field-control__msg field-control__msg--error">{form.errors[field.name]}</div>
      )}
    </label>
  )
}

export default FieldControl
