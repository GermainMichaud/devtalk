import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Content,
  CustomLink,
  ErrorInput,
  Form,
  Input,
  Label,
  Title,
  WrapperAuth,
} from './shared'
import Loader from './shared/Loader'

const Register = () => {
  const [inputs, setInputs] = useState({
    pseudo: '',
    lastname: '',
    firstname: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })
  const [inputError, setInputError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleInputChange = event => {
    if (inputError) setInputError(null)
    const { name, value } = event.target
    setInputs(current => ({
      ...current,
      [name]: value,
    }))
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    setLoading(true)
    for (let key in inputs) {
      let value = inputs[key]
      if (!value.trim().length) {
        setLoading(false)
        setInputError({ [key]: 'Champ requis' })
        return
      }
    }
    if (inputs.password != inputs.passwordConfirm) {
      setLoading(false)
      setInputError({
        password: 'Le mot de passe de confirmation ne correspond pas',
      })
      setInputs(current => ({ ...current, passwordConfirm: '' }))
    }
  }

  return (
    <WrapperAuth>
      <Content>Créez un compte pour pouvoir participer au DevTalk.</Content>
      <Form onSubmit={handleFormSubmit}>
        <Title>S'inscrire</Title>
        <Label>
          Pseudo
          <Input
            type="text"
            placeholder="Ex: Nico"
            name="pseudo"
            required
            value={inputs.pseudo}
            onChange={handleInputChange}
          />
          {inputError && inputError.pseudo ? (
            <ErrorInput>{inputError.pseudo}</ErrorInput>
          ) : (
            ''
          )}
        </Label>
        <Label>
          Nom
          <Input
            type="text"
            placeholder="Ex: Einstein"
            name="lastname"
            required
            value={inputs.lastname}
            onChange={handleInputChange}
          />
          {inputError && inputError.lastname ? (
            <ErrorInput>{inputError.lastname}</ErrorInput>
          ) : (
            ''
          )}
        </Label>
        <Label>
          Prénom
          <Input
            type="text"
            placeholder="Ex: Albert"
            name="firstname"
            required
            value={inputs.firstname}
            onChange={handleInputChange}
          />
          {inputError && inputError.firstname ? (
            <ErrorInput>{inputError.firstname}</ErrorInput>
          ) : (
            ''
          )}
        </Label>
        <Label>
          Email
          <Input
            type="email"
            placeholder="Ex: my@mail.com"
            name="email"
            required
            value={inputs.email}
            onChange={handleInputChange}
          />
          {inputError && inputError.email ? (
            <ErrorInput>{inputError.email}</ErrorInput>
          ) : (
            ''
          )}
        </Label>
        <Label>
          Mot de passe
          <Input
            type="password"
            name="password"
            required
            value={inputs.password}
            onChange={handleInputChange}
          />
          {inputError && inputError.password ? (
            <ErrorInput>{inputError.password}</ErrorInput>
          ) : (
            ''
          )}
        </Label>
        <Label>
          Confirmation du mot de passe
          <Input
            type="password"
            name="passwordConfirm"
            required
            value={inputs.passwordConfirm}
            onChange={handleInputChange}
          />
          {inputError && inputError.passwordConfirm ? (
            <ErrorInput>{inputError.passwordConfirm}</ErrorInput>
          ) : (
            ''
          )}
        </Label>
        <Button bgColor="#dd2c2c" bgColorHover="#d01e1e">
          {loading ? <Loader size={25} /> : "S'inscrire"}
        </Button>
        <CustomLink to="/login">J'ai déjà un compte</CustomLink>
      </Form>
    </WrapperAuth>
  )
}

export default Register
