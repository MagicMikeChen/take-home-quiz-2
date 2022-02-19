import './App.css';
import { useForm } from './useForm' // (加分題) 實作 React Custom hook
import React from 'react'
const initialValues = {
  account: '',
  password: '',
  rememberMe: false
}
const validate = values => {
  const errors = {}
  if (!values.account) {
    errors.account = '請輸入帳號'
  } else if (!values.password) {
    errors.password = '請輸入密碼'
  }
  return errors
}
const onSubmit = values => console.table(values)

function App() {
  const {
    handleChange,
    handleSubmit,
    values,
    errors
  } = useForm({
    initialValues,
    validate,
    onSubmit
  })

  return (
    <React.Fragment>
      <input name='account' onChange={e=>handleChange(e)} value={values.account}
        placeholder='Account' />
      {
        errors.account && (
          <div>{errors.account}</div>
        )
      }
      <input
        name='password'
        onChange={handleChange}
        value={values.password}
        placeholder='password'
      />
      {
        errors.password && (
          <div>{errors.password}</div>
        )
      }
      <label>
        <input type='checkbox' name='rememberMe' onChange={handleChange} checked={values.rememberMe} />
        Remember Me
      </label>
      <button onClick={handleSubmit}>
        Login
      </button>
    </React.Fragment>
  )
}

export default App