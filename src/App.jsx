import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormInput from './component/Input'
import { useState, useRef } from 'react'


function App() {

  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  })

  const input = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      errorMessage: 'username should be 3-20 letter',
      label: 'Username'

    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'It should be valid email',
      label: 'Email'

    },
    {
      id: 3,
      name: 'birthday',
      type: 'text',
      placeholder: 'Birthday',
      label: 'Birthday'

    },
    {
      id: 4,
      name: 'password',
      type: 'text',
      placeholder: 'Password',
      errorMessage: '',
      label: 'Password'

    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'text',
      placeholder: 'ConfirmPassword',
      errorMessage: '',
      label: 'ConfirmPassword'

    },
  ]
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))

  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  console.log(values)
  return (
    <form onSubmit={handleSubmit}>
      <div className='app'>
        <div className="form">
          <h1>Register</h1>
          {
            input.map((input) => (
              <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
            ))
          }


          <button>Submit</button>
        </div>
      </div>
    </form>
  )
}

export default App
