import React from 'react'
import { Form,Text,FormWrap,Container,FormContent, FormerButton, FormInput, FormLabel, FromH1 ,Icon} from './SigninElements'

const SignIn = () => {
  return (
    <Container>
        <FormWrap>
            <Icon to="/">Option Travel</Icon>
            <FormContent>
                <Form action="#">
                    <FromH1>Sign in to your account</FromH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required></FormInput>
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' required></FormInput>
                    <FormerButton type='submit'>Continue</FormerButton>
                    <Text>Forgot password</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
  )
}

export default SignIn