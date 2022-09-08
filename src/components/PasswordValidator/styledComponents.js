import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #24263c;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PasswordCard = styled.div`
  background-color: #383a4e;
  border-radius: 12px;
  width: 65%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 325px;
  box-shadow: 0px 1px 1px #434451;
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 42vh;
    min-width: 520px;
    max-width: 600px;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: #ffffff;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`

export const PasswordDesc = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #f8fafc;
  text-align: center;
  width: 80%;
  margin-top: 12px;
  margin-bottom: 16px;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 100%;
    margin-top: 24px;
    margin-bottom: 28px;
  }
`

export const PasswordInput = styled.input`
  font-family: 'Roboto';
  font-size: 14px;
  height: 43px;
  border: 1px solid #24263c;
  outline: none;
  border-radius: 2px;
  min-width: 280px;
  color: #475569;
  background-color: #edeeff;
  margin-top: 16px;
  padding: 8px 16px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    height: 47px;
    margin-top: 28px;
    min-width: 383px;
  }
`

export const ErrorMsg = styled.p`
  color: #ef4444;
  font-family: 'Roboto';
  font-size: 12px;
  margin-top: 8px;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
