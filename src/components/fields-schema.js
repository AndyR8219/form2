import { REGEXP_PASS, REGEXP_EMAIL } from './constants'
import * as yup from 'yup'

export const fieldsSchema = yup.object().shape({
  email: yup
    .string()
    .matches(REGEXP_EMAIL, 'Неверный адрес электронной почты.'),
  password: yup
    .string()
    .matches(
      REGEXP_PASS,
      'Неверный логин. Допустимые символы: литинские буквы и цифры.'
    ),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Пароли не совпадают')
    .matches(
      REGEXP_PASS,
      'Неверный логин. Допустимые символы: литинские буквы и цифры.'
    ),
})
