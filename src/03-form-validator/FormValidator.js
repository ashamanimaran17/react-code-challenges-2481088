import { useState } from 'react'

export default function FormValidator () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errorMessage, setErrorMessage] = useState("");
  const allErrorMessages = [];
  const validateForm = (event) => {
    event.preventDefault();
    const emailRegexp = new RegExp(/@/);
    if(!email.match(emailRegexp)){
      allErrorMessages.push("Invalid email");
    }
    const passwordRegExp = new RegExp(/.{8,}/)
    if(!password.match(passwordRegExp)){
      allErrorMessages.push("Password length should be more than 8 chars");
    }
    if(password !== passwordConfirm){
      allErrorMessages.push("Password confirmation does not match");
    }
    if(!allErrorMessages.length){
      allErrorMessages.push("Success");
    }
    setErrorMessage(allErrorMessages.join(","))

  }

  return (
    <form>
      <h2>Sign Up!</h2>
      <label htmlFor='email'>Email</label>
      <input
        type='text' name='email'
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password' name='password'
        onChange={e => setPassword(e.target.value)}
      />
      <label htmlFor='password-confirm'>Confirm Password </label>
      <input
        type='password' name='password-confirm'
        onChange={e => setPasswordConfirm(e.target.value)}
      />
      {errorMessage}
      <input type='submit' value='Submit' onClick={(event) => validateForm(event)}/>
    </form>
  )
}
