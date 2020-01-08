import React from 'react'
import LoginForm, { LoginFormFieldProps } from '../../components/LoginForm/LoginForm'

const LoginView: React.FC = () => {
  const [submitting, setSubmitting] = React.useState(false)
  return (
    <div>
      <h1>LoginView</h1>
      <LoginForm onSubmit={handleFormSubmit} submitting={submitting} />
    </div>
  )

  function handleFormSubmit(values: LoginFormFieldProps): void {
    setSubmitting(true)
    setTimeout(() => setSubmitting(false), 3000)
  }
}

export default LoginView
