import {useState} from 'react'
import {
  AppContainer,
  PasswordCard,
  Heading,
  PasswordDesc,
  PasswordInput,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const showPasswordError = password.length < 8

  const onChangePassword = event => {
    setPassword(event.target.value)
  }
  return (
    <AppContainer>
      <PasswordCard>
        <Heading>Password Validator</Heading>
        <PasswordDesc>
          Check how strong and secure is your password
        </PasswordDesc>
        <PasswordInput
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        {showPasswordError && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </PasswordCard>
    </AppContainer>
  )
}

export default PasswordValidator
