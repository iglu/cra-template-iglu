import React from 'react'
import cn from 'classnames'
import { Formik, Field } from 'formik'
import objectKeys from '../../utils/helpers'
import { string, object } from 'yup'
import TextField from '../form/TextField/TextField'
import Button from '../Button/Button'

export interface LoginFormFieldProps {
  email: string
  password: string
}

export interface LoginFormProps {
  submitting: boolean
  onSubmit: (values: LoginFormFieldProps) => void
}

const LoginForm: React.FC<LoginFormProps> = ({ submitting, onSubmit }) => {
  const initialValues: LoginFormFieldProps = {
    email: '',
    password: '',
  }
  const fields = objectKeys(initialValues)
  const validationSchema = object().shape({
    email: string()
      .email()
      .required(),
    password: string().required(),
  })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      render={({ handleSubmit, handleBlur }) => (
        <form onSubmit={handleSubmit} className={BEM()}>
          <Field name={fields.email} onBlur={handleBlur} component={TextField} />
          <Field name={fields.password} onBlur={handleBlur} component={TextField} />
          <Button label="Submit" disabled={submitting}></Button>
        </form>
      )}
    />
  )

  function BEM(): string {
    return cn('login-form', { 'login-form--submitting': submitting })
  }

  function handleSubmit(values: LoginFormFieldProps): void {
    onSubmit(values)
  }
}

export default LoginForm
