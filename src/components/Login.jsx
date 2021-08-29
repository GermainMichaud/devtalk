import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Content,
  CustomLink,
  Form,
  Input,
  Label,
  Title,
  WrapperAuth,
} from './shared'
import Loader from './shared/Loader'

const Login = () => {
  const [inputs, setInputs] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)

  const handleInputChange = event => {
    const { name, value } = event.target
    setInputs(current => ({
      ...current,
      [name]: value,
    }))
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    setLoading(true)
  }

  return (
    <WrapperAuth reverse>
      <Content>
        Connectez-vous pour pouvoir participer au DevTalk.
        <br />
      </Content>
      <Form onSubmit={handleFormSubmit}>
        <Title>Se connecter</Title>
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
        </Label>
        <Button bgColor="#dd2c2c" bgColorHover="#d01e1e">
          {loading ? <Loader size={25} /> : 'Se connecter'}
        </Button>
        <CustomLink to="/register">Créer un compte</CustomLink>
      </Form>
    </WrapperAuth>
  )
}

export default Login
